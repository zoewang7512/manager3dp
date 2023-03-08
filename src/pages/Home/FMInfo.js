import React, { useContext } from "react";
import { Container, Row, Col, Card, CardText, CardTitle } from "reactstrap";
import InfoContext from "../../context/InfoContext";
import EqptAvailability from "./EqptAvailability";

const FMInfo = () => {
  const { allFMData } = useContext(InfoContext);

  return (
    <div className="mis">
      <h4>ROOM 4</h4>
      {allFMData.map((value) => (
        <Container>
          <Row>
            <Col>
              <Card
                body
                inverse
                style={{
                  backgroundColor: "#000000",
                  borderColor: "#333",
                  paddingBottom: "0px"
                }}
              >
                <CardTitle>總設備數</CardTitle>
                <CardText>{value.totalEqpt}</CardText>
              </Card>
            </Col>
            <Col>
              <Card
                body
                inverse
                style={{
                  backgroundColor: "#000000",
                  borderColor: "#333",
                  paddingBottom: "0px"
                }}
              >
                <CardTitle>運行設備數</CardTitle>
                <CardText style={{ color: "#00E7FF" }}>
                  {value.runEqpt}
                </CardText>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card
                body
                inverse
                style={{
                  backgroundColor: "#000000",
                  borderColor: "#333",
                  paddingBottom: "0px"
                }}
              >
                <CardTitle>閒置設備數</CardTitle>
                <CardText>{value.idleEqpt}</CardText>
              </Card>
            </Col>
            <Col>
              <Card
                body
                inverse
                style={{
                  backgroundColor: "#000000",
                  borderColor: "#333",
                  paddingBottom: "0px"
                }}
              >
                <CardTitle>待修設備數</CardTitle>
                <CardText style={{ color: "#FF6D28" }}>
                  {value.faultEqpt}
                </CardText>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="CircularProgressbarArea">
                <h4>設備妥善率</h4>
                <div className="eqptAvailability">
                  <EqptAvailability value={value} />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      ))}
    </div>
  );
};
export default FMInfo;
