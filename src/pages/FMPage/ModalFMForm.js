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

const ModalFMForm = ({ closeModal }) => {
  const toggle = () => closeModal(false);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const dateRef = useRef();
  const totalEqptRef = useRef();
  const idleEqptRef = useRef();
  const runEqptRef = useRef();
  const faultEqptRef = useRef();
  const { handleFMNew } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await handleFMNew(
        totalEqptRef.current.value,
        dateRef.current.value,
        runEqptRef.current.value,
        idleEqptRef.current.value,
        faultEqptRef.current.value
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
        <ModalHeader toggle={toggle}>設備管理計劃表─新增資料</ModalHeader>
        <ModalBody>
          {error && <Alert color="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="exampleDate">日期</Label>
              <Input
                id="equipmentDate"
                name="equipmentDate"
                type="date"
                innerRef={dateRef}
              />
            </FormGroup>
            <FormGroup>
              <Label for="totalEqpt">總設備數</Label>
              <Input
                id="equipmentTotalEqpt"
                name="equipmentTotalEqpt"
                type="number"
                innerRef={totalEqptRef}
              />
            </FormGroup>
            <FormGroup>
              <Label for="runEqpt">運行設備數</Label>
              <Input
                id="equipmentRunEqpt"
                name="equipmentRunEqpt"
                type="number"
                innerRef={runEqptRef}
              />
            </FormGroup>
            <FormGroup>
              <Label for="idleEqpt">閒置設備數</Label>
              <Input
                id="equipmentIdleEqpt"
                name="equipmentIdleEqpt"
                type="number"
                innerRef={idleEqptRef}
              />
            </FormGroup>
            <FormGroup>
              <Label for="faultEqpt">故障設備數</Label>
              <Input
                id="equipmentFaultEqpt"
                name="equipmentFaultEqpt"
                type="number"
                innerRef={faultEqptRef}
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
export default ModalFMForm;
