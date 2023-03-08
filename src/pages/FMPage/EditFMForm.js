import React, { useState, useRef } from "react";
import { Alert, Form, Button, FormGroup, Label, Input } from "reactstrap";
import { useAuth } from "../../context/AuthContext";

const EditFMForm = ({ theData }) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const id = theData.id;
  const [totalEqpt, setTotalEqpt] = useState(theData.totalEqpt);
  const [runEqpt, setRunEqpt] = useState(theData.runEqpt);
  const [idleEqpt, setIdleEqpt] = useState(theData.idleEqpt);
  const [faultEqpt, setFaultEqpt] = useState(theData.faultEqpt);

  const [date, setDate] = useState(theData.date);
  const dateRef = useRef();
  const totalEqptRef = useRef();
  const idleEqptRef = useRef();
  const runEqptRef = useRef();
  const faultEqptRef = useRef();
  const { handleFMEdit } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await handleFMEdit(
        id,
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
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          {error && <Alert color="danger">{error}</Alert>}
          <Label for="exampleDate">日期</Label>
          <Input
            id="equipmentDate"
            name="equipmentDate"
            type="date"
            defaultValue={date}
            innerRef={dateRef}
          />
        </FormGroup>
        <FormGroup>
          <Label for="totalEqpt">總設備數</Label>
          <Input
            id="equipmentTotalEqpt"
            name="equipmentTotalEqpt"
            type="number"
            defaultValue={totalEqpt}
            innerRef={totalEqptRef}
          />
        </FormGroup>
        <FormGroup>
          <Label for="runEqpt">運行設備數</Label>
          <Input
            id="equipmentRunEqpt"
            name="equipmentRunEqpt"
            type="number"
            defaultValue={runEqpt}
            innerRef={runEqptRef}
          />
        </FormGroup>
        <FormGroup>
          <Label for="idleEqpt">閒置設備數</Label>
          <Input
            id="equipmentIdleEqpt"
            name="equipmentIdleEqpt"
            type="number"
            defaultValue={idleEqpt}
            innerRef={idleEqptRef}
          />
        </FormGroup>
        <FormGroup>
          <Label for="faultEqpt">故障設備數</Label>
          <Input
            id="equipmentFaultEqpt"
            name="equipmentFaultEqpt"
            type="number"
            defaultValue={faultEqpt}
            innerRef={faultEqptRef}
          />
        </FormGroup>
        <Button color="info" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
export default EditFMForm;
