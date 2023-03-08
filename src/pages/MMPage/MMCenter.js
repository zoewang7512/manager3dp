import React, { useState, useContext } from "react";
import { Container, Row, Col, Table } from "reactstrap";
import { AiFillPlusSquare } from "react-icons/ai";
import { CSVLink } from "react-csv";
import ReactPaginate from "react-paginate";

import MMTable from "./MMTable";
import ModalMMForm from "./ModalMMForm";
import InfoContext from "../../context/InfoContext";

import dayjs from "dayjs";
const isSameOrAfter = require("dayjs/plugin/isSameOrAfter");
const isSameOrBefore = require("dayjs/plugin/isSameOrBefore");
dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);

const MMCenter = () => {
  //show the　Modal to add new value
  const [showModal, setShowModal] = useState(false);

  const {
    querydata,
    queryStartDate,
    queryEndDate,
    MaintenanceLog
  } = useContext(InfoContext);

  //filterdata
  const filteredData = MaintenanceLog.filter((item) => {
    return querydata.toLowerCase() === ""
      ? item
      : item.notes.toLowerCase().includes(querydata) ||
          item.serialNum.toLowerCase().includes(querydata) ||
          item.applicant.toLowerCase().includes(querydata);
  });
  const filteredTime = filteredData.filter((item) => {
    return queryStartDate === "" && queryEndDate === ""
      ? item
      : dayjs(item.date).isSameOrAfter(dayjs(queryStartDate)) &&
          dayjs(item.date).isSameOrBefore(dayjs(queryEndDate));
  });

  //pagination
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + postsPerPage;
  const currentPosts = filteredTime.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filteredTime.length / postsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * postsPerPage) % filteredTime.length;
    setItemOffset(newOffset);
  };

  return (
    <Container>
      <Row>
        <Col>
          <div className="tableAreaMM">
            <div className="tableHeaderMM">
              <div></div>
              <div>
                <h4>維修管理頁面</h4>
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
                  <th>機身號碼</th>
                  <th>備註</th>
                  <th>人員</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {currentPosts.map((item) => (
                  <tr key={item.id}>
                    <MMTable data={item} />
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
            data={filteredTime}
            filename={"my-mm-file.csv"}
            className="btn w-100 mb-3"
            style={{ backgroundColor: "#ff6d28" }}
            target="_blank"
          >
            Download CSV
          </CSVLink>
        </Col>
      </Row>
      {showModal && <ModalMMForm closeModal={setShowModal} />}
    </Container>
  );
};
export default MMCenter;
