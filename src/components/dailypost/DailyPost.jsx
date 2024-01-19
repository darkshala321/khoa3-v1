import React from 'react';
import './DailyPost.css';
import articles from '../datan';
import { Link } from 'react-router-dom';

const DailyPostItem = ({ _id, image, title, excerpt, author }) => (
  <div className="daily-post-item">
    {image && <img src={image} alt={title} className="daily-post-image" />}
    <div className="daily-post-content">
      <Link to={`/post/${_id}`} className="daily-post-title">
        <h3>{title}</h3>
      </Link>
      <p className="daily-post-excerpt">{excerpt}</p>

      <p className="daily-post-author">
        Author: <Link to={`/author/${author._id}`}>{author.username}</Link>
      </p>
    </div>
  </div>
);

const DailyPost = () => {
  // Limit to 5 posts
  const limitedPosts = articles.slice(0, 5);

  return (
    <div className="daily-post-container">
      {limitedPosts.map((article) => (
        <DailyPostItem key={article._id} {...article} />
      ))}
    </div>
  );
};

export default DailyPost;