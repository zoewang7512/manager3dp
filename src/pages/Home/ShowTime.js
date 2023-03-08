import dayjs from "dayjs";
import Clock from "react-digital-clock";

const ShowTime = () => {
  var now = dayjs().format("YYYY / MM / DD");

  return (
    <div className="showtime">
      <h3>
        {now}
        <br />
        <Clock hour12={false} />
      </h3>
    </div>
  );
};
export default ShowTime;
