import { useEffect, useState } from 'react';

const loadNaverMap = new Promise((resolve, reject) => {
  const mapScript = document.createElement('script');
  mapScript.type = 'text/javascript';
  mapScript.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.REACT_APP_NAVER_MAP_CLIENT_ID}`;
  mapScript.async = true;
  mapScript.onload = resolve;
  mapScript.onerror = reject;
  document.body.appendChild(mapScript);
});

const useNaverMap = (latitude: number, longtitude: number) => {
  const [mapObject, setMapObject] = useState<naver.maps.Map | null>(null);

  useEffect(() => {
    loadNaverMap
      .then(() => {
        const mapOptions = {
          center: new naver.maps.LatLng(latitude, longtitude),
          zoom: 15,
        };
        const map = new naver.maps.Map('myNaverMap', mapOptions);
        setMapObject(map);

        const markerOptions = {
          position: new naver.maps.LatLng(latitude, longtitude),
          map: map,
        };



        const marker = new naver.maps.Marker(
          markerOptions);

      })
      .catch(() => {
        console.log('error occurred while loading map');
      });
  }, []);

  return [mapObject, setMapObject];
};

export default useNaverMap;
