import React from "react";
import Header from "../../layouts/Header";

import DateInfo from "./DateInfo";
import FMInfo from "./FMInfo";
import MMInfo from "./MMInfo";

import "../../components/styles.css";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="home">
        <DateInfo />
        <FMInfo />
        <MMInfo />
      </div>
    </div>
  );
};
export default Home;
