import React from 'react';
import Header from '../header/Header';
import articles from '../data';
import { useParams, Link } from 'react-router-dom';

const SinglePost = () => {
  const { _id } = useParams();
  const article = articles.find(article => article._id.toString() === _id);
  if (!article) {
    return <div>Bài viết không tồn tại</div>;
  }

  return (
    <>
      <Header />
      <div className="single-post">
        <img src={article.image} alt={article.title} className="post-image" />
        <h1 className="post-title">{article.title}</h1>
        <p className="post-author">By {article.author}</p>
        <p className="post-content">{article.content}</p>
        <Link to="/">Quay lại trang chủ</Link>
      </div>
    </>
  );
};

export default SinglePost;