import React, { useState, useContext } from "react";
import Calendar from "react-calendar";
import dayjs from "dayjs";
import InfoContext from "../../context/InfoContext";

const DatePicker = () => {
  //被選擇的那天
  const [selectedDate, setSelectedDate] = useState(new Date(), []);
  //useContext
  const {
    ProductionData,

    EquipmentLog,

    setAllDateInfo,
    setLast5data,
    setallFMData,
    setLast5FMdata
  } = useContext(InfoContext);
  /*
  const [ProductionData, setProductionData] = useState([
    { name: "Loading...", id: "initial" }
  ]);
  const [EquipmentLog, setEquipmentLog] = useState([
    { name: "Loading...", id: "initial" }
  ]);
  const [MaintenanceLog, setMaintenanceLog] = useState([
    { name: "Loading...", id: "initial" }
  ]);
*/

  const handleOnclick = (date) => {
    const filteredData = ProductionData.filter((item) => {
      if (dayjs(item.date).isSame(dayjs(date), "day")) {
        return item;
      }
    });

    const filteredFMData = EquipmentLog.filter((item) => {
      if (dayjs(item.date).isSame(dayjs(date), "day")) {
        return item;
      }
    });

    //找到日期後的5筆資料

    const filteredDataIndex = ProductionData.findIndex((item) => {
      if (dayjs(item.date).isSame(dayjs(date), "day")) {
        return item;
      }
    });

    const data5 = ProductionData.slice(
      filteredDataIndex - 4,
      filteredDataIndex + 1
    );

    const filteredFMIndex = EquipmentLog.findIndex((item) => {
      if (dayjs(item.date).isSame(dayjs(date), "day")) {
        return item;
      }
    });

    const data5FM = EquipmentLog.slice(
      filteredFMIndex - 4,
      filteredFMIndex + 1
    );

    setAllDateInfo(filteredData);
    setLast5data(data5);
    setallFMData(filteredFMData);
    setLast5FMdata(data5FM);
  };
  return (
    <Calendar
      calendarType="US"
      onChange={setSelectedDate}
      value={selectedDate}
      onClickDay={handleOnclick}
      maxDate={new Date()} // will not allow date later than today
      minDate={new Date(2022, 10, 13)} // will not allow date before 13 Nov 2022
      formatDay={(locale, date) => dayjs(date).format("D")} //移除後面的日期及顯示移除數字前方的0
    />
  );
};
export default DatePicker;
