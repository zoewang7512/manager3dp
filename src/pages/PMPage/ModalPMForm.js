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
import React, { useState, useRef } from "react";
import { useAuth } from "../../context/AuthContext";

const ModalPMForm = ({ closeModal }) => {
  const toggle = () => closeModal(false);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const dateRef = useRef();
  const planOutputRef = useRef();
  const currentOutputRef = useRef();
  const { handlePMNew } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await handlePMNew(
        currentOutputRef.current.value,
        dateRef.current.value,
        planOutputRef.current.value
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
        <ModalHeader toggle={toggle}>生產計劃表─新增資料</ModalHeader>
        <ModalBody>
          {error && <Alert color="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="exampleDate">日期</Label>
              <Input
                id="productionDate"
                name="productionDate"
                type="date"
                //value={nameVal}
                innerRef={dateRef}
                //onChange={nameChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="planOutput">預計產量</Label>
              <Input
                id="productionPlanOutput"
                name="productionPlanOutput"
                //placeholder="輸入預計產量"
                type="text"
                //value={nameVal}
                innerRef={planOutputRef}
                //onChange={nameChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="currentOutput">實際產量</Label>
              <Input
                id="productionCurrentOutput"
                name="productionCurrentOutput"
                //placeholder="enter the color value"
                type="text"
                innerRef={currentOutputRef}
                //onChange={valueChange}
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
export default ModalPMForm;
