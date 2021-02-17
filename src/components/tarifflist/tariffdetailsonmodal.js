
import DataSpeedSection from '../dataspeedsection';
import BenefitsSection from '../benefitssection';

const TariffModalDataRow = (props) => (
  <div className="row justify-space-between mt-1 align-items-center">
    <div className="left font-weight-bold">{props.label}</div>
    <div className="right">{props.children}</div>
  </div>
);

const TariffDetailsOnModal = (props) => {

  const {
    name, price, upload_speed, download_speed, benefits
  } = props.data;

  return (
    <div className="tariffdet-modal p-1">
      {name && <TariffModalDataRow label={'Tariff Name'}>{name}</TariffModalDataRow>}
      {upload_speed && (
        <TariffModalDataRow label={'Upload Speed'}>
          <DataSpeedSection type="up" speed={upload_speed} />
        </TariffModalDataRow>
        )
      }
      {download_speed && (
        <TariffModalDataRow label={'Download Speed'}>
          <DataSpeedSection type="down" speed={download_speed} />
        </TariffModalDataRow>
        )
      }
      {
        benefits.length > 0 && (
          <div className="benefits-container mt-1">
            <label className="mb-1 d-block font-weight-bold">Benefits</label>
            <div className="benefits-section w-100">
              <BenefitsSection data={[...benefits]} tariffName={name} />
            </div>
          </div>
        )
      }
      {price && (
        <TariffModalDataRow label={'Tariff Price'}>
          <span className="price font-xx-large">{price} &#8364;</span>
        </TariffModalDataRow>
        )
      }
    </div>
  );
}

export default TariffDetailsOnModal;
