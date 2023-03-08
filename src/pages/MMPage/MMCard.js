import { Row, Col, Card, CardText, CardTitle } from "reactstrap";

const MMCard = () => {
  return (
    <div>
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
            <CardTitle>下次保養日期</CardTitle>
            <CardText style={{ fontSize: "1.4rem" }}>2023-03-15</CardText>
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
            <CardTitle>原廠保養日期</CardTitle>
            <CardText style={{ fontSize: "1.4rem" }}>2023-03-20</CardText>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
export default MMCard;
