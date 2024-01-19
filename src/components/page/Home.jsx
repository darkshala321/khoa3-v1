import React from 'react';
import Header from '../header/Header';
import News from '../news/News';
import FeaturePosts from '../featurepost/FeaturePosts';
import DailyPost from '../dailypost/DailyPost';

const Home = () => {
  return (
<>
        <Header />
        <News />
        <FeaturePosts />
        <DailyPost />
</>
  );
};

export default Home;
