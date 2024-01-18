import React from 'react';
import SinglePost from './components/singlepost/SinglePost';
import AuthorProfile from './components/page/AuthorProfile';
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
          <Route path="/author/:_id" element={<AuthorProfile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;