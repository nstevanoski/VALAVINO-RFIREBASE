import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBnOt8-xMujGjbp0XKbZ9wOA_89KjzX1yE",
  authDomain: "react-valavino.firebaseapp.com",
  projectId: "react-valavino",
  storageBucket: "react-valavino.appspot.com",
  messagingSenderId: "552424830996",
  appId: "1:552424830996:web:eaf3723af41032cff98f01",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
