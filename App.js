import React from "react";
import Route from "./src/pages/Route";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA6L6PJ0oVvE2pvh5gBE3AqZ4EQQ8V-hOc",
  authDomain: "jisuikiroku.firebaseapp.com",
  databaseURL: "https://jisuikiroku.firebaseio.com",
  projectId: "jisuikiroku",
  storageBucket: "jisuikiroku.appspot.com",
  messagingSenderId: "352631699316",
  appId: "1:352631699316:web:90b4a9ed0ad5ccec275e21",
  measurementId: "G-DDPV6FL9V6",
};
firebase.initializeApp(firebaseConfig);

export default function App() {
  return <Route />;
}
