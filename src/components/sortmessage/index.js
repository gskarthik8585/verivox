import { useContext } from 'react';
import { TariffListContext } from '../../context/tariffListContext';
import './styles.scss';

const SortMessage = () => {

    const { sortParamsRef: {name, type, bool} } = useContext(TariffListContext);

    if (!!name && !!bool)
    return (
      <div className="sort-message"> Sorted By : {name} : {type} </div>
    );

    return <div />
}

export default SortMessage;
