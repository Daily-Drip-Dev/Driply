import { useCallback, useRef, useState } from 'react';

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

const CAFE_CATEGORY_CODE = 'CE7';

function fetchCafeData({ kakaoPlace, keyword, page, callback }: FetchCafeDataPropsByKeyword) {
  kakaoPlace.keywordSearch(
    keyword,
    (data, status, pagination) => {
      callback(data, status, pagination);
    },
    { page, size: 15, category_group_code: CAFE_CATEGORY_CODE }
  );
}

export default function useKakaoCafeSearch() {
  const hasNextPageRef = useRef<boolean | null>(null);
  const searchTimer = useRef<NodeJS.Timeout | null>(null);
  const [searchData, setSearchData] = useState<kakao.maps.services.PlacesSearchResult | null>(null);
  const [isSearchLoading, setIsSearchLoading] = useState(false);
  const [page, setPage] = useState(1);

  const callbackFirstFetching = useCallback(
    (
      data: kakao.maps.services.PlacesSearchResult,
      status: kakao.maps.services.Status,
      pagination: kakao.maps.Pagination
    ) => {
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
    []
  );

  const callbackNextFetching = useCallback(
    (
      data: kakao.maps.services.PlacesSearchResult,
      status: kakao.maps.services.Status,
      pagination: kakao.maps.Pagination
    ) => {
      if (status === kakao.maps.services.Status.OK) {
        setSearchData((prev) => [
          ...(prev || []),
          ...data.filter((item) => item.category_group_code === CAFE_CATEGORY_CODE),
        ]);
        setPage(page + 1);
        hasNextPageRef.current = pagination.hasNextPage;
        setIsSearchLoading(false);
      }
    },
    [page]
  );

  /**
   * useKakaoMapsScript에서 kakaoPlace를 불러올 수 있습니다.
   */
  const fetchFirstSearchData = useCallback(
    (kakaoPlace: kakao.maps.services.Places, keyword: string) => {
      setPage(1);

      if (searchTimer.current) {
        clearTimeout(searchTimer.current);
        setIsSearchLoading(false);
      }

      searchTimer.current = setTimeout(() => {
        setIsSearchLoading(true);
        hasNextPageRef.current = null;
        fetchCafeData({
          kakaoPlace,
          keyword,
          page: 1,
          callback: callbackFirstFetching,
        });
      }, 500);
    },
    [callbackFirstFetching]
  );

  /**
   * useKakaoMapsScript에서 kakaoPlace를 불러올 수 있습니다.
   */
  const fetchNextSearchData = useCallback(
    (kakaoPlace: kakao.maps.services.Places, keyword: string) => {
      setIsSearchLoading(true);
      fetchCafeData({
        kakaoPlace,
        keyword,
        page: page + 1,
        callback: callbackNextFetching,
      });
    },
    [callbackNextFetching, page]
  );

  return {
    searchData,
    isSearchLoading,
    hasNextPage: hasNextPageRef.current,
    fetchFirstSearchData,
    fetchNextSearchData,
  };
}
