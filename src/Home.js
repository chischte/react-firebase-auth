import React from "react";
import firebaseInitializeApp from "./firebase";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <button onClick={() => firebaseInitializeApp.auth().signOut()}>Sign out</button>
    </>
  );
};

export default Home;
