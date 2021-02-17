
const BenefitsSection = (props) => {

  const {data, tariffName } = props;

  return (
    <div className="container d-flex flex-column m-auto">
    {
      data.map((benefit, index) => (
        <div className="benefit-item d-flex flex-row">
          <span className="symbol">&#10003;</span>
          <span key={`benefit_${tariffName}_${index}`}>{benefit}</span>
        </div>
      ))
    }
    </div>
  )
}

export default BenefitsSection;
