import "../../components/styles.css";

import Header from "../../layouts/Header";
import MMCenter from "./MMCenter";
import MMLeft from "./MMLeft";

const MMPage = () => {
  return (
    <div>
      <Header />
      <div className="mmpage">
        <MMLeft />
        <MMCenter />
      </div>
    </div>
  );
};
export default MMPage;
