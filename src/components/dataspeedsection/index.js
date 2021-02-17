
import './styles.scss';

const DataSpeedSection = (props) => {

  const { type, speed } = props;

  return (
    <div className="data-speed-section d-flex flex-row">
      {type === 'up' && <span className="icon center-align font-weight-bold font-x">&#x2191;</span>}
      {type === 'down' && <span className="icon center-align font-weight-bold font-x">&#x2193;</span>}
      <span className="reading center-align">{speed} Mbit/s</span>
    </div>
  );
}

export default DataSpeedSection;
