import styles from './NaverMap.module.scss';
import { useEffect, useState } from 'react';
import useNaverMap from '../../Hooks/useNaverMap';

const NaverMap = () => {
  // const [mapObject, setMapObject] = useNaverMap(
  //   37.459440684714096,
  //   126.95377774972711,
  // );

  return <div id="myNaverMap" className={styles.mapStyle}></div>;
};

export default NaverMap;
