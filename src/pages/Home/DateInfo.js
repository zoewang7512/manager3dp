import React, { useContext } from "react";
import { Container, Row, Col } from "reactstrap";
import InfoContext from "../../context/InfoContext";
import ShowTime from "./ShowTime";
import DateCard from "./DateCard";
import DatePicker from "./DatePicker";

const DateInfo = () => {
  const { allDateInfo } = useContext(InfoContext);
  return (
    <div className="dateInfo">
      <Container>
        <Row>
          <Col>
            <ShowTime />
          </Col>
        </Row>
        <Row>
          <Col>
            <DatePicker />
          </Col>
        </Row>
        <Row>
          {allDateInfo.map((value) => (
            <DateCard value={value} />
          ))}
        </Row>
      </Container>
    </div>
  );
};
export default DateInfo;
