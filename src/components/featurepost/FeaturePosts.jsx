import React from 'react';
import './FeaturePosts.css';
import { Link } from 'react-router-dom';
import moment from 'moment';
import articles from '../datan';
import { FeaturePostItem } from '../../subComponents/FeaturePostItem/FeaturePostItem';




const FeaturePosts = () => {
  // Only take the first 6 articles
  const limitedPosts = articles[0].slice(0, 6);
console.log(limitedPosts);
  return (
    <div className="feature-posts-container">
      <h2 className="feature-posts-heading">Bài nổi bật</h2>
      <div className="feature-posts-grid">
        {limitedPosts.map((article, index) => 
          <FeaturePostItem key={article._id} number={index + 1} article={article} />
        )}
      </div>
    </div>
  );
};

export default FeaturePosts;