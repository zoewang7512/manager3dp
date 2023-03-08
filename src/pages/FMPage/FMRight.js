import { Container, Row, Col, Card, CardText, CardTitle } from "reactstrap";
import React, { useContext } from "react";
import InfoContext from "../../context/InfoContext";
import FMChart from "./FMChart";

const FMRight = () => {
  const { allFMData } = useContext(InfoContext);

  return (
    <div className="pmRight">
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
                  borderColor: "#333"
                }}
              >
                <CardTitle>運行設備數</CardTitle>
                <CardText>{value.runEqpt}</CardText>
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
                <CardText> {value.idleEqpt}</CardText>
              </Card>
            </Col>
            <Col>
              <Card
                body
                inverse
                style={{
                  backgroundColor: "#000000",
                  borderColor: "#333"
                }}
              >
                <CardTitle>設備利用率</CardTitle>
                <CardText>
                  {Math.round((value.runEqpt / value.totalEqpt) * 100)}
                  <span style={{ fontSize: "1.4rem" }}>%</span>
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
                <CardTitle>故障設備數</CardTitle>
                <CardText> {value.faultEqpt}</CardText>
              </Card>
            </Col>
            <Col>
              <Card
                body
                inverse
                style={{
                  backgroundColor: "#000000",
                  borderColor: "#333"
                }}
              >
                <CardTitle>設備故障率</CardTitle>
                <CardText>
                  {Math.round((value.faultEqpt / value.totalEqpt) * 100)}
                  <span style={{ fontSize: "1.4rem" }}>%</span>
                </CardText>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col>
              <FMChart />
            </Col>
          </Row>
        </Container>
      ))}
    </div>
  );
};
export default FMRight;
