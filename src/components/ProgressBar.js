import { Progress } from "reactstrap";

const ProgressBar = ({ value }) => {
  const per = Math.round((value.currentOutput / value.planOutput) * 100);

  return (
    <div className="progressBar">
      <h4>實際完成率</h4>
      <Progress
        animated
        color="info"
        value={`${per}`}
        style={{
          height: "20px"
        }}
      >
        <span>{per}%</span>
      </Progress>
    </div>
  );
};
export default ProgressBar;
