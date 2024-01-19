import React, { useState, useEffect } from "react";
import Header from "./components/header/Header";
import News from "./components/news/News";
import Login from "./components/LogReg/login/Login";
import Register from "./components/LogReg/register/Register";
import FeaturePosts from "./components/featurepost/FeaturePosts";
import DailyPost from "./components/dailypost/DailyPost";
// import Footer from "./components/footer/Footer";
import "./App.css";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const updateToken = (userToken) => {
    localStorage.setItem("token", userToken);
    setToken(userToken);
  };

  if(!token){
    return <Login setToken={updateToken} />
  }
  
//   useEffect (() => {

//   }
//  , [token]);
 


  return (
    <div className="App">
      {/* <Header />
      <News />
      <FeaturePosts />
      <DailyPost />
      <Footer /> */}
      {/* <Login />
      <Register /> */}
    </div>
  );
}

export default App;
