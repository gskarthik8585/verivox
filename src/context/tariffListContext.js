import React, { useState, useEffect, createContext, useRef } from 'react';

export const TariffListContext = createContext();

export const TariffListProvider = ({children}) => {

  const pageLimit = 5;

  const [pageNo, setPageNo] = useState({start: 0, end: 0});
  const [ totalTarrifList, setTotalTariffList] = useState([]);
  const [ visibleTariffList, setVisibleTariffList] = useState([]);
  const sortedRef = useRef({name: null, type: null, bool: null})

  const getTariffDetails = (id) => {
    const tariffDet = visibleTariffList.filter(tariff => tariff.id === id);
    return tariffDet[0];
  }

  const setPageNumberParams = () => {
    let start = pageNo.end;
    let end = start + pageLimit;
    end = end >= totalTarrifList.length ? totalTarrifList.length : end;
    setPageNo({...pageNo, start, end});
  }

  const setVisibleTariffListOnPage = () => {
    setPageNumberParams();
  }

  const setTotalTariffListOnPageLoad = (data) => {
    setTotalTariffList(data);
  }

  const setSortParamsRef = (params=null) => {
    if (params === null) {
      sortedRef.current = {name: null, type: null, bool: null};
    } else {
      const { name, type, bool } = params;
      sortedRef.current = {
        name: bool ? name : null,
        type: bool ? type : null,
        bool: bool ? bool : null
      };
    }
  }

  // sort filter function
  const sortListDetails = (name, type, bool, list=null) => {
    let existingTariffList = list || visibleTariffList;
    setSortParamsRef({name, type, bool});
    if (bool) {
      existingTariffList.sort((obj1, obj2) => {
        if (type === 'asc') {
          return (+obj1[name] - obj2[name]);
          // return (+obj2[name] - +obj1[name]);
        } else if (type === 'desc') {
          // return (+obj1[name] - obj2[name]);
          return (+obj2[name] - +obj1[name]);
        }
      });
    } else {
      existingTariffList = [...totalTarrifList.slice(0, existingTariffList.length)];
    }
    setVisibleTariffList([...existingTariffList]);
  }

  // load more function
  const loadMoreData = () => {
    setPageNumberParams();
  }

  useEffect(() => {
    if (totalTarrifList.length > 0) {
      setVisibleTariffListOnPage();
    }
  }, [totalTarrifList.length]);

  useEffect(() => {

    const { start, end } = pageNo;

    if (start === 0) {
      setVisibleTariffList(totalTarrifList.slice(start, end));
    } else if (end <= totalTarrifList.length) {
      const initlist = [...totalTarrifList.slice(0, visibleTariffList.length)];
      sortListDetails(null, null, null, [...initlist, ...totalTarrifList.slice(start, end)]);
    }

  }, [pageNo.start, pageNo.end])


  let contextObj = {
    totalTariffListLength: totalTarrifList.length,
    setTotalTariffListOnPageLoad,
    visibleTariffList,
    setVisibleTariffListOnPage,
    getTariffDetails,
    sortListDetails,
    loadMoreData,
    sortParamsRef: sortedRef.current
  }

  return (
    <TariffListContext.Provider value={{...contextObj}}>
      {children}
    </TariffListContext.Provider>
  );
}
