import React, {useState, useEffect, useContext, useRef} from 'react';
import { TariffListContext } from '../../context/tariffListContext';
import Tariff from './tariff';
import CustomModal from '../../components/modal';
import TariffDetailsOnModal from './tariffdetailsonmodal';
import './styles.scss';

const TariffList = (props) => {

  const [ open, setOpen ] = useState(false);

  const tariffItem = useRef(null);

  const {
    visibleTariffList,  totalTariffListLength,
    loadMoreData
  } = useContext(TariffListContext);

  const observerRef = useRef(null);

  const onVisibleLoadMoreCb = (entries) => {

    entries.map(entry => {
      console.log('entry.isIntersecting : ',entry.isIntersecting);
      if (entry.isIntersecting) {
        setTimeout(() => {
          // simulating api call
          observerRef.current.unobserve(document.getElementById("load-more"));
          loadMoreData();
        }, 1500);
      }
    })

  }

  const setIntersectionObserver = () => {

    let options = {
      root: null,
      rootMargin: '0px 0px',
      threshold: 1
    }

    observerRef.current = new IntersectionObserver(onVisibleLoadMoreCb, options);

  }

  const observeTargetElement = () => {
    const target = document.getElementById("load-more");
    const observer = observerRef.current;
    observer && target && observer.observe(target);
  }

  useEffect(() => {
      setIntersectionObserver();
      observeTargetElement();
  }, [visibleTariffList.length]);

  const openTariffModal = (items) => {
    tariffItem.current = {...items};
    setOpen(true);
  }

  const closeTariffModal = () => {
    setOpen(false);
  }

  if (visibleTariffList.length > 0)
  return (
    <>
      {
        visibleTariffList.map((tariffItem, index) => (
          <Tariff
            {...tariffItem}
            rowNum={index + 1}
            key={`tariff_item_${tariffItem.id}`}
            openTariffModal={() => openTariffModal(tariffItem)}
          />
        ))
      }

      {
        (visibleTariffList.length < totalTariffListLength) && (
          <div id="load-more" className="font-weight-bold">Loading More ....</div>
        )
      }

      <CustomModal
        open={open}
        modalHeader={'Tariff Details'}
        data={{...tariffItem.current}}
        onClose={closeTariffModal}
      >
        {open && (<TariffDetailsOnModal data={{...tariffItem.current}} />)}
      </CustomModal>

    </>
  );
  return <div />
}

export default TariffList;
