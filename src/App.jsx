import React , {useState,useEffect} from 'react';
import Login from "./components/LogReg/login/Login";


import SinglePost from './components/singlepost/SinglePost';
import AuthorProfile from './components/page/AuthorProfile';
import Home from './components/page/home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const updateToken = (userToken) => {
    localStorage.setItem("token", userToken);
    setToken(userToken);
  };

  if(!token){
    return <Login setToken={updateToken} />
  }
  

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:_id" element={<SinglePost />} />
          <Route path="/author/:_id" element={<AuthorProfile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;


