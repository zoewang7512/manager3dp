import {
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// Radial separators
import RadialSeparators from "./RadialSeparators";

const FuelProgressbar = ({ value }) => {
  return (
    <div className="fuelProgressbar">
      <CircularProgressbarWithChildren
        value={value.totalFuel}
        text={`${value.totalFuel}%`}
        strokeWidth={10}
        styles={buildStyles({
          pathColor: "#FF6D28",
          textColor: "#FF6D28",
          strokeLinecap: "butt"
        })}
      >
        <RadialSeparators
          count={12}
          style={{
            background: "#222",
            width: "2px",
            // This needs to be equal to props.strokeWidth
            height: `${10}%`
          }}
        />
      </CircularProgressbarWithChildren>
    </div>
  );
};
export default FuelProgressbar;
