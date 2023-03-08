import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "firebase/auth";

import db from "../firebase";
import {
  collection,
  addDoc,
  doc,
  deleteDoc,
  serverTimestamp,
  updateDoc
} from "firebase/firestore";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return signOut(auth);
  }

  function handlePMNew(currentOutput, date, planOutput) {
    //const name = prompt("enter color name");
    //const value = prompt("enter color value");
    const serverTime = serverTimestamp();
    const collectionRef = collection(db, "productionData");
    const payload = { currentOutput, date, planOutput, serverTime }; //如果欄位名稱與變數相同就可以省略，否則必須宣告。如:name:colorname
    const docRef = addDoc(collectionRef, payload);
    return docRef;
  }
  /*
  function handleNew1() {
    //const name = prompt("enter color name");
    //const value = prompt("enter color value");
    const totalEqpt = "175";
    const date = "2023-03-01";
    const runEqpt = "160";
    const idleEqpt = "3";
    const faultEqpt = "12";

    const serverTime = serverTimestamp();
    const collectionRef = collection(db, "equipmentLog");
    const payload = {
      totalEqpt,
      date,
      runEqpt,
      idleEqpt,
      faultEqpt,
      serverTime
    }; //如果欄位名稱與變數相同就可以省略，否則必須宣告。如:name:colorname
    const docRef = addDoc(collectionRef, payload);
    return docRef;
  }
*/
  function handlePMEdit(id, currentOutput, date, planOutput) {
    const serverTime = serverTimestamp();
    const docRef = doc(db, "productionData", id);
    const payload = { currentOutput, date, planOutput, serverTime }; //更新資料會移到最上方
    //setDoc(docRef, payload); //如果沒有color1這個id，則新增；如果有的話，將數值覆蓋過去
    //setDoc比較適合用來修改資料
    return updateDoc(docRef, payload); //updateDoc只會更新有變動的表格，其他的值不會被覆蓋
  }

  function handlePMDel(id) {
    const docRef = doc(db, "productionData", id);
    alert("刪除成功!");
    return deleteDoc(docRef);
  }

  function handleFMNew(totalEqpt, date, runEqpt, idleEqpt, faultEqpt) {
    //const name = prompt("enter color name");
    //const value = prompt("enter color value");
    const serverTime = serverTimestamp();
    const collectionRef = collection(db, "equipmentLog");
    const payload = {
      totalEqpt,
      date,
      runEqpt,
      idleEqpt,
      faultEqpt,
      serverTime
    }; //如果欄位名稱與變數相同就可以省略，否則必須宣告。如:name:colorname
    const docRef = addDoc(collectionRef, payload);
    return docRef;
  }

  function handleFMEdit(id, totalEqpt, date, runEqpt, idleEqpt, faultEqpt) {
    const serverTime = serverTimestamp();
    const docRef = doc(db, "equipmentLog", id);
    const payload = {
      totalEqpt,
      date,
      runEqpt,
      idleEqpt,
      faultEqpt,
      serverTime
    }; //更新資料會移到最上方
    //setDoc(docRef, payload); //如果沒有color1這個id，則新增；如果有的話，將數值覆蓋過去
    //setDoc比較適合用來修改資料
    return updateDoc(docRef, payload); //updateDoc只會更新有變動的表格，其他的值不會被覆蓋
  }

  function handleFMDel(id) {
    const docRef = doc(db, "equipmentLog", id);
    alert("刪除成功!");
    return deleteDoc(docRef);
  }

  function handleMMNew(applicant, date, notes, serialNum) {
    const serverTime = serverTimestamp();
    const collectionRef = collection(db, "maintenanceLog");
    const payload = {
      applicant,
      date,
      notes,
      serialNum,
      serverTime
    }; //如果欄位名稱與變數相同就可以省略，否則必須宣告。如:name:colorname
    const docRef = addDoc(collectionRef, payload);
    return docRef;
  }

  function handleMMEdit(id, applicant, date, notes, serialNum) {
    const serverTime = serverTimestamp();
    const docRef = doc(db, "maintenanceLog", id);
    const payload = {
      applicant,
      date,
      notes,
      serialNum,
      serverTime
    }; //更新資料會移到最上方
    //setDoc(docRef, payload); //如果沒有color1這個id，則新增；如果有的話，將數值覆蓋過去
    //setDoc比較適合用來修改資料
    return updateDoc(docRef, payload); //updateDoc只會更新有變動的表格，其他的值不會被覆蓋
  }

  function handleMMDel(id) {
    const docRef = doc(db, "maintenanceLog", id);
    alert("刪除成功!");
    return deleteDoc(docRef);
  }
  /*
   function handleNew(name, value) {
    //const name = prompt("enter color name");
    //const value = prompt("enter color value");
    const timestamp = serverTimestamp();

    const collectionRef = collection(db, "colors");
    const payload = { name, value, timestamp }; //如果欄位名稱與變數相同就可以省略，否則必須宣告。如:name:colorname
    const docRef = addDoc(collectionRef, payload);
    return docRef;
  }
  
  function handleEdit(id) {
    //console.log(id);
    const timestamp = serverTimestamp();
    const name = prompt("Edit color name");
    const value = prompt("Edit color value");
    const docRef = doc(db, "colors", id);
    const payload = { name, value, timestamp }; //更新資料會移到最上方
    //setDoc(docRef, payload); //如果沒有color1這個id，則新增；如果有的話，將數值覆蓋過去
    //setDoc比較適合用來修改資料
    return updateDoc(docRef, payload); //updateDoc只會更新有變動的表格，其他的值不會被覆蓋
  } 
  function handleDel(id) {
    const docRef = doc(db, "colors", id);
    alert("delete successfully");
    return deleteDoc(docRef);
  }
  */

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsub;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout,
    handlePMNew,
    handlePMEdit,
    handlePMDel,
    handleFMNew,
    handleFMEdit,
    handleFMDel,
    handleMMNew,
    handleMMEdit,
    handleMMDel
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
