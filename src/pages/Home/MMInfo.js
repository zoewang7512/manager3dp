import React, { useContext } from "react";
import { Container, Row, Col } from "reactstrap";
import InfoContext from "../../context/InfoContext";
import RecordTable from "./RecordTable";
import MMCard from "../MMPage/MMCard";

const MMInfo = () => {
  //useContext
  const { MaintenanceLog } = useContext(InfoContext);
  const currentPosts = MaintenanceLog.slice(0, 10);

  return (
    <div className="building">
      <h4>維修</h4>
      <Container>
        <Row>
          <MMCard />
        </Row>
        <Row>
          <Col>
            <div className="tableArea">
              <h4>近期維修紀錄</h4>
              <RecordTable data={currentPosts} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default MMInfo;
