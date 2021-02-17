
import './styles.scss';

const BackToTop = () => {

  const backToTop = () => {
    document.getElementById("page-content").scrollTo(0, 0);
  }

  return (
    <div
      className="back-to-top-arrow clickable-link"
      onClick={backToTop}
    >
      &#10148;
    </div>
  );
}

export default BackToTop;
