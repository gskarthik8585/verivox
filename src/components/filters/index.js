import React, {useState, useEffect, useContext} from 'react';
import { TariffListContext } from '../../context/tariffListContext';
import "./styles.scss";

const getSortFiltersData = () => ([{
  name: 'upload_speed',
  label: 'Upload Speed',
  buttons: { asc: false, desc: false}
}, {
  name: 'download_speed',
  label: 'Download Speed',
  buttons: { asc: false, desc: false}
}, {
  name: 'price',
  label: 'Price',
  buttons: { asc: false, desc: false}
}]);

const FilterSection = (props) => {

  const contextObj = useContext(TariffListContext);

  const [ sortedMasterList, setSortedMasterList ] = useState([]);

  const sortData = (sortTypeObj, sortBtnSelected, newValue) => {
    const newSortedList = [];
    [...getSortFiltersData()].map((sortObj) => {
      const buttonsDefaultState = {asc: false, desc: false};
      if (sortObj.name === sortTypeObj.name) {
        sortObj.buttons = {...sortObj.buttons, ...buttonsDefaultState, [sortBtnSelected]: newValue}
        newSortedList.push({ ...sortObj });
      } else {
        newSortedList.push({ ...sortObj, buttons: {...buttonsDefaultState} });
      }

    });
    setSortedMasterList([...newSortedList]);
    contextObj.sortListDetails(sortTypeObj.name, sortBtnSelected, newValue);
  }

  useEffect(() => {
    setSortedMasterList([...getSortFiltersData()]);
  }, [contextObj.visibleTariffList.length]);

  return (
    <section className="filter-section pb-2">
      <fieldset>
        <legend>Sort By Filter</legend>
        <div className="d-flex flex-row sort-section-container">
        {
          sortedMasterList.length > 0 && sortedMasterList.map((sortType, index) => (
            <div className="sort-section d-flex flex-row p-1 align-items-center" key={`${index}_sort_filter`}>
              <label>{sortType.label}</label>
              <div className="sort-buttons">
              {
                Object.keys(sortType.buttons).map((sortBtn, sortBtnIndex) => {
                  const sortLabel = sortBtn === 'asc' ? 'ASC' : 'DESC';
                  return (
                    <span
                      key={`${sortBtnIndex}_${index}_${sortLabel}`}
                      className={`clickable-link ${sortType.buttons[sortBtn] ? 'selected' : ''} text-uppercase ${sortBtnIndex % 2 === 0 ? `left` : `right`}`}
                      selected={sortType.buttons[sortBtn]}
                      onClick={(e) => sortData({...sortType}, sortBtn, !sortType.buttons[sortBtn])}
                    >
                      {sortLabel}
                    </span>
                  );
                })
              }
              </div>
            </div>
          ))
        }
        </div>
      </fieldset>
    </section>
  );
}

export default FilterSection;
