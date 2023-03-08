import { Container, Row, Col } from "reactstrap";
import ShowTime from "../Home/ShowTime";
import SearchBar from "./SearchBar";
import MMCard from "./MMCard";

const MMLeft = () => {
  return (
    <div className="mmleft">
      <Container>
        <Row>
          <Col>
            <ShowTime />
          </Col>
        </Row>
        <Row>
          <SearchBar />
        </Row>
        <Row>
          <div className="mt-5">
            <MMCard />
          </div>
        </Row>
      </Container>
    </div>
  );
};
export default MMLeft;
