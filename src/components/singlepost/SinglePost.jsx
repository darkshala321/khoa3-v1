import React from 'react';
import Header from '../header/Header';
import moment from 'moment';
import './index.css';
import articles from '../datan';
import { useParams, Link } from 'react-router-dom';

const SinglePost = () => {
  const { _id } = useParams();
  const article = articles.find(article => article._id.toString() === _id);

  if (!article) {
    return <div>Bài viết không tồn tại</div>;
  }

  // Thêm mảng bình luận cho bài viết từ dữ liệu articles
  const comments = article.comments || [];

  // Lấy danh sách các bài viết gần đây (tối đa 6 bài)
  const recentPosts = articles.filter(post => post._id !== _id).slice(0, 6);

  return (
    <>
      <Header />
      <div className="single-post-container">
        <div className="single-post">
          <img src={article.image} alt={article.title} className="post-image" />
          <h1 className="post-title">{article.title}</h1>
          <div className="author-info">
            <img src={article.author.profileImage} alt={`${article.author.username}'s avatar`} className="author-avatar" />
            <Link to={`/author/${article.author._id}`} className="author-link">
              <p className="post-author">{article.author.username}</p>
            </Link>
          </div>
          <p className="post-createDate">
            Đăng vào: {moment(article.createDate).format('HH:mm:ss [ngày] DD/MM/YYYY')}
          </p>
          <p className="post-content">{article.content}</p>
          {/* Hiển thị số lượng bình luận */}
          <p className="comment-count">Số lượng bình luận: {comments.length}</p>
          {/* Hiển thị danh sách các bình luận */}
          <div className="comments">
            <h3 className="comments-heading">Bình luận:</h3>
            <ul className="comment-list">
              {comments.map((comment, index) => (
                <li key={index} className="comment">
                  {comment}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="sidebar">
          <h3 className="sidebar-heading">Các bài viết gần đây</h3>
          <ul className="recent-posts">
            {recentPosts.map(post => (
              <li key={post._id} className="recent-post">
                <div className="recent-post-thumbnail">
                  <img src={post.image} alt={post.title} />
                </div>
                <div className="recent-post-details">
                  <Link to={`/post/${post._id}`}>{post.title}</Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SinglePost;