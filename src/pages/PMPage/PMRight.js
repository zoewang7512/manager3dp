import { Container, Row, Col, Card, CardText, CardTitle } from "reactstrap";
import React, { useContext } from "react";

import InfoContext from "../../context/InfoContext";
import PMChart from "./PMChart";

const PMRight = () => {
  const { allDateInfo } = useContext(InfoContext);
  /*
  //現在日期
  const [currentDay, setCurrentDay] = useState(1);
  //抓過去五天的資料
  const [postsPerDay, setPostsPerDay] = useState(5);
  const [currentPosts, setCurrentPosts] = useState([]);

  // const lastPostIndex = currentDay * postsPerDay;
  //const firstPostIndex = lastPostIndex - postsPerDay;
  const lastPostIndex = 5;
  const firstPostIndex = 1;
  setCurrentPosts(data.slice(firstPostIndex, lastPostIndex));
*/
  return (
    <div className="pmRight">
      <Container>
        <Row>
          <h4>產品良率</h4>
          <Col>
            {allDateInfo.map((value) => (
              <Card
                body
                inverse
                style={{
                  backgroundColor: "#000000",
                  borderColor: "#333",
                  paddingBottom: "0px"
                }}
              >
                <CardTitle>合格產品數</CardTitle>
                <CardText>{value.currentOutput}</CardText>
              </Card>
            ))}
          </Col>
          <Col>
            {allDateInfo.map((value) => (
              <Card
                body
                inverse
                style={{
                  backgroundColor: "#000000",
                  borderColor: "#333"
                }}
              >
                <CardTitle>良品率</CardTitle>
                <CardText>
                  {Math.round((value.currentOutput / value.planOutput) * 100)}
                  <span style={{ fontSize: "1.4rem" }}>%</span>
                </CardText>
              </Card>
            ))}
          </Col>
        </Row>

        <Row>
          <Col>
            {allDateInfo.map((value) => (
              <Card
                body
                inverse
                style={{
                  backgroundColor: "#000000",
                  borderColor: "#333",
                  paddingBottom: "0px"
                }}
              >
                <CardTitle>不良產品數</CardTitle>
                <CardText> {value.planOutput - value.currentOutput}</CardText>
              </Card>
            ))}
          </Col>
          <Col>
            {allDateInfo.map((value) => (
              <Card
                body
                inverse
                style={{
                  backgroundColor: "#000000",
                  borderColor: "#333"
                }}
              >
                <CardTitle>不良率</CardTitle>
                <CardText>
                  {Math.round(
                    ((value.planOutput - value.currentOutput) /
                      value.planOutput) *
                      100
                  )}
                  <span style={{ fontSize: "1.4rem" }}>%</span>
                </CardText>
              </Card>
            ))}
          </Col>
        </Row>

        <Row>
          <Col>
            <PMChart />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default PMRight;
