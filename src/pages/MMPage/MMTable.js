import React, { useState, useEffect } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { MdEdit, MdDeleteForever } from "react-icons/md";
import dayjs from "dayjs";
import { useAuth } from "../../context/AuthContext";
import EditMMForm from "./EditMMForm";

const MMTable = ({ data }) => {
  const { handleMMDel } = useAuth();

  //modal
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  useEffect(() => {
    setModal(false);
  }, [data]);

  return (
    <>
      <td>{dayjs(data.date).format("YYYY/MM/DD")}</td>
      <td>{data.serialNum}</td>
      <td>{data.notes}</td>
      <td>{data.applicant}</td>

      <td>
        <MdEdit onClick={toggle} />
      </td>
      <td>
        <MdDeleteForever onClick={() => handleMMDel(data.id)} />
      </td>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Edit</ModalHeader>
        <ModalBody>
          <EditMMForm theData={data} />
        </ModalBody>
      </Modal>
    </>
  );
};
export default MMTable;
