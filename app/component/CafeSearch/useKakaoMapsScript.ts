import { useEffect, useState } from 'react';

let isImport = false;
let kakaoPlace: kakao.maps.services.Places | null = null;

export default function useKakaoMapsScript() {
  const [isLoading, setIsLoading] = useState(!isImport);

  useEffect(() => {
    if (!isImport) {
      setIsLoading(true);
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${
        import.meta.env.VITE_KAKAO_JS_KEY
      }&libraries=services&autoload=false`;

      script.onload = () => {
        kakao.maps.load(() => {
          setIsLoading(false);
          isImport = true;
          kakaoPlace = new kakao.maps.services.Places();
        });
      };
      document.head.appendChild(script);
    }
  }, []);

  return { isLoading, kakaoPlace };
}
