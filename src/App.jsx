import React from 'react';
import SinglePost from './components/singlepost/SinglePost';
import Home from './components/page/home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:_id" element={<SinglePost />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;