import React from 'react';
import DataSpeedSection from '../dataspeedsection';
import BenefitsSection from '../benefitssection';

const Tariff = (props) => {

  const {
    name, price, upload_speed, download_speed, benefits, rowNum
  } = props;

  return (
    <section className="tariff-section d-flex flex-row">
      <span className="row-number center-align">{rowNum}</span>
      <div className="name-section font-x d-flex align-items-center">{name}</div>
      <div className="speed-section">
        <div className="container d-flex flex-column">
          <DataSpeedSection type="up" speed={upload_speed} />
          <DataSpeedSection type="down" speed={download_speed} />
        </div>
      </div>
      <div className="benefits-section d-none d-md-block">
        <BenefitsSection data={[...benefits]} tariffName={name} />
      </div>
      <div className="price-section d-flex flex-xs-row flex-sm-column align-items-end">
        <span className="price font-xx-large">{price} &#8364;</span>
        <button className="action-btn d-flex center-align" onClick={props.openTariffModal} />
      </div>
    </section>
  )
}

export default Tariff;
