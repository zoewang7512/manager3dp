import "../../components/styles.css";

import Header from "../../layouts/Header";
import FMLeft from "./FMLeft";
import FMCenter from "./FMCenter";
import FMRight from "./FMRight";

const FMPage = () => {
  return (
    <div>
      <Header />
      <div className="home">
        <FMLeft />
        <FMCenter />
        <FMRight />
      </div>
    </div>
  );
};
export default FMPage;
