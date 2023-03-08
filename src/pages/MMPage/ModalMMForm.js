import React, { useState, useRef } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Alert
} from "reactstrap";
import { useAuth } from "../../context/AuthContext";

const ModalMMForm = ({ closeModal }) => {
  const toggle = () => closeModal(false);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const dateRef = useRef();
  const applicantRef = useRef();
  const notesRef = useRef();
  const serialNumRef = useRef();
  const { handleMMNew } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await handleMMNew(
        applicantRef.current.value,
        dateRef.current.value,
        notesRef.current.value,
        serialNumRef.current.value
      );
    } catch {
      setError("資料新增錯誤");
    }
    setLoading(false);
    closeModal(false);
  }

  return (
    <div className="addmodal">
      <Modal isOpen>
        <ModalHeader toggle={toggle}>維修紀錄─新增資料</ModalHeader>
        <ModalBody>
          {error && <Alert color="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="exampleDate">日期</Label>
              <Input
                id="maintenanceDate"
                name="maintenanceDate"
                type="date"
                innerRef={dateRef}
              />
            </FormGroup>
            <FormGroup>
              <Label for="serialNum">機身號碼</Label>
              <Input
                id="serialNum"
                name="serialNum"
                type="text"
                innerRef={serialNumRef}
              />
            </FormGroup>
            <FormGroup>
              <Label for="maintenanceNotes">備註</Label>
              <Input
                id="maintenanceNotes"
                name="maintenanceNotes"
                type="text"
                innerRef={notesRef}
              />
            </FormGroup>
            <FormGroup>
              <Label for="maintenanceApplicant">人員</Label>
              <Input
                id="applicant"
                name="applicant"
                type="text"
                innerRef={applicantRef}
              />
            </FormGroup>

            <Button color="info" type="submit">
              Submit
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};
export default ModalMMForm;
