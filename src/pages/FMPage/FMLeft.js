import React, { useContext } from "react";
import { Container, Row, Col } from "reactstrap";
import ShowTime from "../Home/ShowTime";
import InfoContext from "../../context/InfoContext";
import EqptAvailability from "../Home/EqptAvailability";
import DatePicker from "../Home/DatePicker";

const FMLeft = () => {
  const { allFMData } = useContext(InfoContext);
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
          <Col>
            {allFMData.map((value) => (
              <div className="CircularProgressbarArea">
                <h4>設備妥善率</h4>
                <div className="eqptAvailabilitySmall">
                  <EqptAvailability value={value} />
                </div>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default FMLeft;
