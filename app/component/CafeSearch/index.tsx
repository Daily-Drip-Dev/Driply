import styles from './styles.css';
import { useCallback, useRef, useState } from 'react';
import { typography } from 'src/vanilla-extract/typography.css';
import useKakaoMapsScript from '~/component/CafeSearch/useKakaoMapsScript';
import Input from '../Input';
import Loader from '../Loader';
import ScrollObserver from '../ScrollObserver';
import useKakaoCafeSearch from './useKakaoCafeSearch';

interface CafeSearchProps {
  onSearch: (data: kakao.maps.services.PlacesSearchResultItem) => void;
}

export default function CafeSearch({ onSearch }: CafeSearchProps) {
  const { isLoading: isScriptLoading, kakaoPlace } = useKakaoMapsScript();
  const [searchValue, setSearchValue] = useState('');
  const rootRef = useRef<HTMLDivElement>(null);

  const { searchData, isSearchLoading, hasNextPage, fetchFirstSearchData, fetchNextSearchData } = useKakaoCafeSearch();
  const isFirstSearchLoading = !hasNextPage && isSearchLoading;

  const handleSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (isScriptLoading || !kakaoPlace) return;
      const newSearchValue = e.target.value;
      setSearchValue(newSearchValue);
      fetchFirstSearchData(kakaoPlace, newSearchValue);
    },
    [isScriptLoading, kakaoPlace, fetchFirstSearchData]
  );

  const observeSearchNextPageCallback = (entries: IntersectionObserverEntry[]) => {
    const isValidIntersecting = entries[0].isIntersecting && hasNextPage && kakaoPlace;
    if (!isValidIntersecting) return;
    fetchNextSearchData(kakaoPlace, searchValue);
  };

  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <Input value={searchValue} onChange={handleSearch} placeholder="검색할 카페를 입력하세요." />
      </div>

      <div className={styles.cafeListContainer}>
        {isScriptLoading || isFirstSearchLoading ? (
          <div className={styles.flexCenterContainer}>
            <Loader />
          </div>
        ) : searchData?.length === 0 ? (
          <div className={styles.flexCenterContainer}>
            <div className={typography.heading5}>검색 결과가 없습니다.</div>
          </div>
        ) : (
          searchData?.map((item) => (
            <button key={`${item.id}-${searchValue}`} className={styles.cafeRow} onClick={() => onSearch(item)}>
              <div className={typography.heading5}>{item.place_name}</div>
              <div className={typography.small}>{item.address_name}</div>
            </button>
          ))
        )}

        {hasNextPage && (
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
