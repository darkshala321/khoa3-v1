import React from 'react';
import './FeaturePosts.css';
import { Link } from 'react-router-dom';
import moment from 'moment';
import articles from '../datan';

const FeaturePostItem = ({ _id, number, title, author, image, createDate }) => (
  <div className="feature-post-item">
    <div className="feature-post-number">#{number}</div>
    <div className="feature-post-content">
      <Link to={`/post/${_id}`} className="feature-post-title">
        <h3>{title}</h3>
      </Link>
      <p className="feature-post-date">Tạo lúc: {moment(createDate).format('HH:mm:ss [ngày] DD/MM/YYYY')}</p>
      <p className="feature-post-author">
        <Link to={`/author/${author._id}`}>{author.username}</Link>
      </p>
    </div>
  </div>
);

const FeaturePosts = () => {
  // Only take the first 6 articles
  const limitedPosts = articles.slice(0, 6);

  return (
    <div className="feature-posts-container">
      <h2 className="feature-posts-heading">Bài nổi bật</h2>
      <div className="feature-posts-grid">
        {limitedPosts.map((article, index) => (
          <FeaturePostItem key={article._id} number={index + 1} {...article} />
        ))}
      </div>
    </div>
  );
};

export default FeaturePosts;