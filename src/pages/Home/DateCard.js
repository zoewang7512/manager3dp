import { Row, Col, Card, CardText, CardTitle } from "reactstrap";
import ProgressBar from "../../components/ProgressBar";

const DateCard = ({ value }) => {
  return (
    <div>
      <Row>
        <Col md="6">
          <Card
            body
            inverse
            style={{
              backgroundColor: "#000000",
              borderColor: "#333",
              paddingBottom: "0px"
            }}
          >
            <CardTitle>生產計劃量</CardTitle>
            <CardText>{value.planOutput}</CardText>
          </Card>
        </Col>
        <Col md="6">
          <Card
            body
            inverse
            style={{
              backgroundColor: "#000000",
              borderColor: "#333",
              paddingBottom: "0px"
            }}
          >
            <CardTitle>實際產量</CardTitle>
            <CardText>{value.currentOutput}</CardText>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <ProgressBar value={value} />
        </Col>
      </Row>
    </div>
  );
};
export default DateCard;
