import * as firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAs5wEDKiMCsGEf9XwCTFV2dSeR_oQCZHQ",
  authDomain: "bedtime-stories-66948.firebaseapp.com",
  projectId: "bedtime-stories-66948",
  storageBucket: "bedtime-stories-66948.appspot.com",
  messagingSenderId: "775664992134",
  appId: "1:775664992134:web:445c0748a7a60ab05d3607"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  
export default firebase.firestore