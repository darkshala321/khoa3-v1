import React from 'react';
import './AuthorProfile.css';
import articles from '../datan';
import { useParams, Link } from 'react-router-dom';

const AuthorProfile = () => {
  const { _id } = useParams();
  const userProfile = articles.find(article => article.author._id === _id);

  if (!userProfile) {
    return <div className="author-not-found">Tác giả không tồn tại.</div>;
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img src={userProfile.author.profileImage} alt={`${userProfile.author.username}'s avatar`} className="profile-avatar" />
        <h1 className="profile-name">{userProfile.author.username}</h1>
        <div className="profile-details">
          <span className="profile-posts">Bài đã đăng: {articles.filter(article => article.author._id === _id).length}</span>
          <span className="profile-age">Tuổi Tinhte: {Math.floor((Date.now() - new Date(userProfile.author.createDate)) / (1000 * 60 * 60 * 24))} ngày</span>
          <span className="profile-email">Email: {userProfile.author.email}</span>
        </div>
      </div>
      <div className="profile-posts-container">
        <h2 className="profile-posts-heading">Các bài viết của tác giả:</h2>
        <ul className="profile-posts-list">
          {articles.filter(article => article.author._id === _id).map(article => (
            <li key={article._id}>
              <Link to={`/post/${article._id}`}>{article.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AuthorProfile;