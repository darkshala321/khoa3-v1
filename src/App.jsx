import React from 'react';
import Header from './components/header/Header';
import News from './components/news/News';
import FeaturePosts from './components/featurepost/FeaturePosts'
import DailyPost from './components/dailypost/DailyPost';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <News />
      <FeaturePosts />
      <DailyPost />
    </div>
  );
}

export default App;