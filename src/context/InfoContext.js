import { createContext, useState, useEffect } from "react";
import db from "../firebase";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";

const InfoContext = createContext();

export function InfoProvider({ children }) {
  const [ProductionData, setProductionData] = useState([
    { name: "Loading...", id: "initial" }
  ]);
  const [EquipmentLog, setEquipmentLog] = useState([
    { name: "Loading...", id: "initial" }
  ]);
  const [MaintenanceLog, setMaintenanceLog] = useState([
    { name: "Loading...", id: "initial" }
  ]);
  //firebase data

  useEffect(() => {
    const collectionRef = collection(db, "productionData");
    const q = query(collectionRef, orderBy("date", "asc"));

    const unsub = onSnapshot(q, (snapshot) =>
      setProductionData(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      )
    );
    return unsub;
  }, []);

  useEffect(() => {
    const collectionRef1 = collection(db, "equipmentLog");
    const q1 = query(collectionRef1, orderBy("date", "asc"));
    const unsub1 = onSnapshot(q1, (snapshot) =>
      setEquipmentLog(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      )
    );
    return unsub1;
  }, []);

  useEffect(() => {
    const collectionRef2 = collection(db, "maintenanceLog");
    const q2 = query(collectionRef2, orderBy("date", "desc"));

    const unsub2 = onSnapshot(q2, (snapshot) =>
      setMaintenanceLog(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      )
    );
    return unsub2;
  }, []);

  //DateInfo
  const defaultDateInfo = [
    {
      planOutput: "",
      currentOutput: "",
      date: "",
      id: ""
    }
  ];
  const [allDateInfo, setAllDateInfo] = useState(defaultDateInfo);

  //found the 7  pieces of data
  const [last5data, setLast5data] = useState([
    { name: "Loading...", id: "initial" }
  ]);

  //Mis
  const defaultFMData = [
    {
      totalEqpt: "170",
      runEqpt: "",
      idleEqpt: "",
      faultEqpt: ""
    }
  ];
  const [allFMData, setallFMData] = useState(defaultFMData);

  const [last5FMdata, setLast5FMdata] = useState([
    { name: "Loading...", id: "initial" }
  ]);

  const [queryStartDate, setQueryStartDate] = useState("");
  const [queryEndDate, setQueryEndDate] = useState("");
  const [querydata, setQuerydata] = useState("");

  return (
    <InfoContext.Provider
      value={{
        ProductionData,
        setProductionData,
        EquipmentLog,
        setEquipmentLog,
        MaintenanceLog,
        setMaintenanceLog,
        allDateInfo,
        setAllDateInfo,
        last5data,
        setLast5data,
        last5FMdata,
        setLast5FMdata,
        allFMData,
        setallFMData,
        querydata,
        setQuerydata,
        queryStartDate,
        setQueryStartDate,
        queryEndDate,
        setQueryEndDate
      }}
    >
      {children}
    </InfoContext.Provider>
  );
}
export default InfoContext;
