import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import { useAuth } from "../../context/AuthContext";
import { MdEdit, MdDeleteForever } from "react-icons/md";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import EditForm from "./EditForm";

const PMTable = ({ data }) => {
  const { handlePMDel } = useAuth();

  //modal
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  useEffect(() => {
    setModal(false);
  }, [data]);
  return (
    <>
      <td>{dayjs(data.date).format("YYYY/MM/DD")}</td>
      <td>{data.planOutput}</td>
      <td>{data.currentOutput}</td>
      <td>
        <MdEdit onClick={toggle} />
      </td>
      <td>
        <MdDeleteForever onClick={() => handlePMDel(data.id)} />
      </td>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Edit</ModalHeader>
        <ModalBody>
          <EditForm theData={data} />
        </ModalBody>
      </Modal>
    </>
  );
};
export default PMTable;
