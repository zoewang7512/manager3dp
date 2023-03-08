// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCr68LnU4y2qATjlu5uUIqlNlx-pSBILg4",
  authDomain: "dp-react-firebase.firebaseapp.com",
  projectId: "dp-react-firebase",
  storageBucket: "dp-react-firebase.appspot.com",
  messagingSenderId: "297271093765",
  appId: "1:297271093765:web:82764a73d1062dad854a6c"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//export default getFirestore();
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export default getFirestore();
