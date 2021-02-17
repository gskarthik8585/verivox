import React, { useState, useEffect, useContext } from 'react';
import FilterSection from './components/filters';
import TariffList from './components/tarifflist';
import { TariffListContext } from './context/tariffListContext';
import requests from './api';

const Home = () => {

  const [ tariffList, setTariffList ] = useState([]);

  const contextObj = useContext(TariffListContext);

  useEffect(() => {
    async function getData() {
      const { status, data } = await requests.get(`https://602a71216c995100176ee5b8.mockapi.io/verivox/api/v1/tariff_master`);
      if (status) {
        console.log('data : ',data);
        contextObj.setTotalTariffListOnPageLoad([...data]);
      }

    }
    getData();
  }, []);

  if (contextObj.visibleTariffList.length > 0)
  return (
    <>
      <FilterSection />
      <TariffList />
    </>
  );
  return <div />
}

export default Home;
