import { Alert, Form, Button, FormGroup, Label, Input } from "reactstrap";

import React, { useState, useRef } from "react";
import { useAuth } from "../../context/AuthContext";

const EditForm = ({ theData }) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const id = theData.id;
  const [currentOutput, setCurrentOutput] = useState(theData.currentOutput);
  const [planOutput, setPlanOutput] = useState(theData.planOutput);
  const [date, setDate] = useState(theData.date);
  const dateRef = useRef();
  const planOutputRef = useRef();
  const currentOutputRef = useRef();
  const { handlePMEdit } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await handlePMEdit(
        id,
        currentOutputRef.current.value,
        dateRef.current.value,
        planOutputRef.current.value
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
            id="productionDate"
            name="productionDate"
            type="date"
            defaultValue={date}
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
            defaultValue={planOutput}
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
            defaultValue={currentOutput}
            innerRef={currentOutputRef}
            //onChange={valueChange}
          />
        </FormGroup>
        <Button color="info" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
export default EditForm;
