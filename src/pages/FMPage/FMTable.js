import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import { useAuth } from "../../context/AuthContext";
import { MdEdit, MdDeleteForever } from "react-icons/md";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import EditFMForm from "./EditFMForm";

const FMTable = ({ data }) => {
  const { handleFMDel } = useAuth();

  //modal
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  useEffect(() => {
    setModal(false);
  }, [data]);
  return (
    <>
      <td>{dayjs(data.date).format("YYYY/MM/DD")}</td>
      <td>{data.totalEqpt}</td>
      <td>{data.runEqpt}</td>
      <td>{data.idleEqpt}</td>
      <td>{data.faultEqpt}</td>
      <td>
        <MdEdit onClick={toggle} />
      </td>
      <td>
        <MdDeleteForever onClick={() => handleFMDel(data.id)} />
      </td>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Edit</ModalHeader>
        <ModalBody>
          <EditFMForm theData={data} />
        </ModalBody>
      </Modal>
    </>
  );
};
export default FMTable;
