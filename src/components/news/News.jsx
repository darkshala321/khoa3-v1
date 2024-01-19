import React from 'react';
import { Link } from 'react-router-dom';
import './News.css';
import moment from 'moment';
import articles from '../datan';

const NewsItem = ({ image, title, author, content, _id, createDate }) => (
  <div className={`news-item ${_id === articles[0]._id ? "first" : ""}`}>
    <img src={image} alt={title} className="news-image" />
    <div className="news-content">
      <Link to={`/post/${_id}`} className="news-title">
        <h3>{title}</h3>
      </Link>
      <p className="createDate-content">Đăng vào: {moment(createDate).format('HH:mm:ss [ngày] DD/MM/YYYY')}</p>
      <p className="news-content-ex">{content.substring(0, 100)}</p>
      <p className="news-author">
          Author: <Link to={`/author/${author._id}`}>{author.username}</Link>
        </p>
    </div>
  </div>
);

const SidebarItem = ({ title, _id, createDate }) => (
  <div className="sidebar-item">
    <Link to={`/post/${_id}`} className="sidebar-title">
      <h3>{title}</h3>
    </Link>
    <p className="createDate-content-sidebar">{moment(createDate).format('HH:mm:ss [ngày] DD/MM/YYYY')}</p>
  </div>
);

function News() {
  // Hiển thị 4 bài đầu tiên (có 1 bài hình to nhất)
  const mainNewsArticles = articles.slice(0, 4);

  // Hiển thị 8 bài trên sidebar trang chủ
  const sidebarArticles = articles.slice(4, 12);

  return (
    <div className="news-layout">
      <div className="news-container">
        {mainNewsArticles.map(article => (
          <NewsItem key={article._id} {...article} />
        ))}
      </div>
      <aside className="news-sidebar">
        <h2 className="sidebar-heading">Xem nhanh</h2>
        {sidebarArticles.map(article => (
          <SidebarItem key={article._id} {...article} />
        ))}
      </aside>
    </div>
  );
}

export default News;