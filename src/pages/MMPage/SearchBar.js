import { useContext } from "react";
import {
  Form,
  Input,
  InputGroup,
  InputGroupText,
  FormGroup,
  Label,
  Col
} from "reactstrap";
import { BsSearch } from "react-icons/bs";
import InfoContext from "../../context/InfoContext";

const SearchBar = () => {
  const { setQuerydata, setQueryStartDate, setQueryEndDate } = useContext(
    InfoContext
  );

  return (
    <div className="searchBar">
      <h4>搜尋</h4>
      <InputGroup>
        <Input
          placeholder="搜尋機身號碼/人員/備註..."
          onChange={(e) => setQuerydata(e.target.value)}
        />

        <InputGroupText>
          <BsSearch />
        </InputGroupText>
      </InputGroup>
      <Form>
        <FormGroup row>
          <Label for="startDate" sm={4}>
            開始日期
          </Label>
          <Col sm={8}>
            <Input
              type="date"
              onChange={(e) => setQueryStartDate(e.target.value)}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="endDate" sm={4}>
            結束日期
          </Label>
          <Col sm={8}>
            <Input
              type="date"
              defaultValue={new Date()}
              onChange={(e) => setQueryEndDate(e.target.value)}
            />
          </Col>
        </FormGroup>
      </Form>
    </div>
  );
};
export default SearchBar;
