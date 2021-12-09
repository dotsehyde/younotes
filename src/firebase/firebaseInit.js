import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCpXkwGIOV8BAhap4wPXG_nXTNbjMjz6X8",
  authDomain: "younotesapp.firebaseapp.com",
  projectId: "younotesapp",
  storageBucket: "younotesapp.appspot.com",
  messagingSenderId: "314402770922",
  appId: "1:314402770922:web:810d62dc23fb921a7b2c93",
  measurementId: "G-7W6XJK3GBQ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
