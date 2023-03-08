import Header from "../../layouts/Header";
import DateInfo from "../Home/DateInfo";

import "../../components/styles.css";
import PMCenter from "./PMCenter";
import PMRight from "./PMRight";

const PMPage = () => {
  return (
    <div>
      <Header />
      <div className="home">
        <DateInfo />
        <PMCenter />
        <PMRight />
      </div>
    </div>
  );
};
export default PMPage;
