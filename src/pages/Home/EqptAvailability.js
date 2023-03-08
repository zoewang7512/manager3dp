import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const EqptAvailability = ({ value }) => {
  const plus = Number(value.runEqpt) + Number(value.idleEqpt);
  const per = Math.round((plus / value.totalEqpt) * 100);
  return (
    <CircularProgressbar
      value={`${per}`}
      text={`${per}%`}
      //text={value.idleEqpt}
      background
      backgroundPadding={6}
      styles={buildStyles({
        backgroundColor: "#FF6D28",
        textColor: "#222",
        pathColor: "#222",
        trailColor: "transparent"
      })}
    />
  );
};
export default EqptAvailability;
