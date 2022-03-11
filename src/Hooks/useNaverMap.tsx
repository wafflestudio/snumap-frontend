import { useEffect, useState } from 'react';

const useNaverMap = (latitude: number, longtitude: number) => {
  const [mapObject, setMapObject] = useState<naver.maps.Map | null>(null);

  const mapScript = document.createElement('script');
  mapScript.type = 'text/javascript';
  mapScript.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.REACT_APP_NAVER_MAP_CLIENT_ID}`;
  mapScript.async = true;
  document.body.appendChild(mapScript);

  useEffect(() => {
    const mapOptions = {
      center: new naver.maps.LatLng(latitude, longtitude),
      zoom: 15,
    };
    const map = new naver.maps.Map('myNaverMap', mapOptions);
    setMapObject(map);
  }, []);

  return [mapObject, setMapObject];
};

export default useNaverMap;
