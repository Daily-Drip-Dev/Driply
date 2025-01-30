import styles from './styles.css';
import { useEffect, useRef, useState } from 'react';
import { typography } from 'src/vanilla-extract/typography.css';
import useKakaoMapsScript from 'src/hooks/useKakaoMapsScript';
import Input from '../Input';
import Loader from '../Loader';
import ScrollObserver from '../ScrollObserver';

interface FetchCafeDataPropsByKeyword {
  kakaoPlace: kakao.maps.services.Places;
  keyword: string;
  page: number;
  callback: (
    data: kakao.maps.services.PlacesSearchResult,
    status: kakao.maps.services.Status,
    pagination: kakao.maps.Pagination
  ) => void;
}

function fetchCafeData({ kakaoPlace, keyword, page, callback }: FetchCafeDataPropsByKeyword) {
  kakaoPlace.keywordSearch(
    keyword,
    (data, status, pagination) => {
      callback(data, status, pagination);
    },
    { page, size: 15, category_group_code: 'CE7' }
  );
}

export default function CafeSearch() {
  const { isLoading: isScriptLoading, kakaoPlace } = useKakaoMapsScript();

  const [searchValue, setSearchValue] = useState('');
  const [searchData, setSearchData] = useState<kakao.maps.services.PlacesSearchResult | null>(null);
  const [isSearchLoading, setIsSearchLoading] = useState(false);

  const [page, setPage] = useState(1);
  const hasNextPageRef = useRef<boolean | null>(null);
  const searchTimer = useRef<NodeJS.Timeout | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isScriptLoading) return;
    setSearchValue(e.target.value);
    setPage(1);
  };

  useEffect(() => {
    if (isScriptLoading || !searchValue) return;
    searchTimer.current = setTimeout(() => {
      setIsSearchLoading(true);
      hasNextPageRef.current = null;
      fetchCafeData({
        kakaoPlace: kakaoPlace!,
        keyword: searchValue,
        page: 1,
        callback: (data, status, pagination) => {
          if (status === kakao.maps.services.Status.ZERO_RESULT) {
            setSearchData([]);
            hasNextPageRef.current = null;
            setIsSearchLoading(false);
          }
          if (status === kakao.maps.services.Status.OK) {
            setSearchData([...data]);
            hasNextPageRef.current = pagination.hasNextPage;
            setIsSearchLoading(false);
          }
        },
      });
    }, 300);

    return () => {
      if (searchTimer.current) {
        clearTimeout(searchTimer.current);
        setIsSearchLoading(false);
      }
    };
  }, [searchValue, isScriptLoading, kakaoPlace]);

  const observeSearchNextPageCallback = (entries: IntersectionObserverEntry[]) => {
    if (entries[0].isIntersecting && hasNextPageRef.current) {
      setIsSearchLoading(true);
      const newPage = page + 1;
      fetchCafeData({
        kakaoPlace: kakaoPlace!,
        keyword: searchValue,
        page: newPage,
        callback: (data, status, pagination) => {
          if (status === kakao.maps.services.Status.OK) {
            setSearchData((prev) => [...(prev || []), ...data.filter((item) => item.category_group_code === 'CE7')]);
            setPage(newPage);
            hasNextPageRef.current = pagination.hasNextPage;
            setIsSearchLoading(false);
          }
        },
      });
    }
  };

  const isFirstLoading = !hasNextPageRef.current && isSearchLoading;

  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <Input value={searchValue} onChange={handleSearch} placeholder="검색할 카페를 입력하세요." />
      </div>

      <div className={styles.cafeListContainer}>
        {isScriptLoading || isFirstLoading ? (
          <div className={styles.flexCenterContainer}>
            <Loader />
          </div>
        ) : searchData?.length === 0 ? (
          <div className={styles.flexCenterContainer}>
            <div className={typography.heading5}>검색 결과가 없습니다.</div>
          </div>
        ) : (
          searchData?.map((item) => (
            <div key={`${item.id}-${searchValue}`} className={styles.cafeRow}>
              <div className={typography.heading5}>{item.place_name}</div>
              <div className={typography.small}>{item.address_name}</div>
            </div>
          ))
        )}

        {hasNextPageRef.current && (
          <div className={styles.flexCenterContainer}>
            {isSearchLoading ? (
              <Loader />
            ) : (
              <ScrollObserver
                callback={observeSearchNextPageCallback}
                options={{ root: rootRef.current, rootMargin: '200px', threshold: 0 }}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
