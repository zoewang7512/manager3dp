import { Container, Row, Col, Table } from "reactstrap";
import React, { useState, useEffect, useContext } from "react";
import { AiFillPlusSquare, AiFillCheckCircle } from "react-icons/ai";
import { CSVLink } from "react-csv";

//firestore
import ModalPMForm from "./ModalPMForm";
import PMTable from "./PMTable";

import ReactPaginate from "react-paginate";
import InfoContext from "../../context/InfoContext";

const PMCenter = () => {
  //show the　Modal to add new value
  const [showModal, setShowModal] = useState(false);

  const { ProductionData } = useContext(InfoContext);

  const [postsPerPage, setPostsPerPage] = useState(10);
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + postsPerPage;
  const currentPosts = ProductionData.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(ProductionData.length / postsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * postsPerPage) % ProductionData.length;
    setItemOffset(newOffset);
  };

  return (
    <Container>
      <Row>
        <Col>
          <div className="tableArea">
            <div className="tableHeader">
              <div></div>
              <div>
                <h4>生產計劃表</h4>
              </div>
              <div>
                <AiFillPlusSquare
                  onClick={() => {
                    setShowModal(true);
                  }}
                  style={{ color: "#ff6d28", fontSize: "20px" }}
                />
              </div>
            </div>
            <Table dark>
              <thead>
                <tr>
                  <th>日期</th>
                  <th>預計產量</th>
                  <th>實際產量</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {currentPosts.map((item) => (
                  <tr key={item.id}>
                    <PMTable data={item} />
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>

          <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={1}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
            containerClassName="pagination"
            pageLinkClassName="page-num"
            previousLinkClassName="page-num"
            nextLinkClassName="page-num"
            activeLinkClassName="active"
          />
          <CSVLink
            data={ProductionData}
            filename={"my-pm-file.csv"}
            className="btn w-100 mb-3"
            style={{ backgroundColor: "#ff6d28" }}
            target="_blank"
          >
            Download CSV
          </CSVLink>
        </Col>
      </Row>
      {showModal && <ModalPMForm closeModal={setShowModal} />}
    </Container>
  );
};
export default PMCenter;
