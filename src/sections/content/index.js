import SortMessage from '../../components/sortmessage';
import BackToTop from '../../components/backtotop';
import "./styles.scss";

const Content = (props) => {
  return (
    <section id="page-content" className="content pl-3 pr-3 pt-2">
      {props.children}
      <SortMessage />
      <BackToTop />
    </section>
  );
}

export default Content;
