import React from 'react';
import './AuthorProfile.css';
import author from '../author';
import { useParams, Link } from 'react-router-dom';

const AuthorProfile = () => {
  const { _id } = useParams();
  const userProfile = author.find(user => user._id === _id);

  if (!userProfile) {
    return <div className="author-not-found">Tác giả không tồn tại.</div>;
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img src={userProfile.profileImage} alt={`${userProfile.username}'s avatar`} className="profile-avatar" />
        <h1 className="profile-name">{userProfile.username}</h1>
        <div className="profile-details">
          <span className="profile-posts">Bài đã đăng: {userProfile.posts.length}</span>
          <span className="profile-age">Tuổi Tinhte: {Math.floor((Date.now() - new Date(userProfile.createDate)) / (1000 * 60 * 60 * 24))} ngày</span>
          <span className="profile-email">Email: {userProfile.email}</span>
        </div>
      </div>
      <div className="profile-posts-container">
        <h2 className="profile-posts-heading">Các bài viết của tác giả:</h2>
        <ul className="profile-posts-list">
          {userProfile.posts.map(postId => (
            <li key={postId}>
              <Link to={`/post/${postId}`}>{postId}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AuthorProfile;