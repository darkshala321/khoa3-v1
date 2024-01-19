import React from "react";
import "./news.css";

const articles = [
  {
    id: 1,
    image:
      "https://photo2.tinhte.vn/data/attachment-files/2024/01/8240230_cover-frame_Ces241.jpg",
    title:
      "CES24: Satechi ra mắt cục sạc nhiều cổng gây ấn tượng 145W, 4 cổng C, thay đổi được chân cắm sạc",
    author: "Trần Hoàng Long",
  },
  {
    id: 2,
    image:
      "https://photo2.tinhte.vn/data/attachment-files/2024/01/8240230_cover-frame_Ces241.jpg",
    title:
      "CES24: Trên tay 3i Intelligent Cleaning Station H1 Pro - Trạm làm sạch thông minh không cần nước",
    author: "cuhiep",
  },
  {
    id: 3,
    image:
      "https://photo2.tinhte.vn/data/attachment-files/2024/01/8240230_cover-frame_Ces241.jpg",
    title:
      "CES24: CORSAIR giới thiệu bàn phím K55 CORE, tản nhiệt khí A115, thúng máy hơi cả",
    author: "Lư Thế Nghĩa",
  },
  {
    id: 4,
    image:
      "https://photo2.tinhte.vn/data/attachment-files/2024/01/8240230_cover-frame_Ces241.jpg",
    title:
      "CES24: CORSAIR giới thiệu bàn phím K55 CORE, tản nhiệt khí A115, thúng máy hơi cả",
    author: "Lư Thế Nghĩa",
  },
  {
    id: 5,
    image:
      "https://photo2.tinhte.vn/data/attachment-files/2024/01/8240230_cover-frame_Ces241.jpg",
    title: "CES24 id 5",
    author: "Lư Thế Nghĩa",
  },
  {
    id: 6,
    image:
      "https://photo2.tinhte.vn/data/attachment-files/2024/01/8240230_cover-frame_Ces241.jpg",
    title: "CES24 id 6",
    author: "Lư Thế Nghĩa",
  },
  {
    id: 7,
    image:
      "https://photo2.tinhte.vn/data/attachment-files/2024/01/8240230_cover-frame_Ces241.jpg",
    title: "CES24 id 7",
    author: "Lư Thế Nghĩa",
  },
  {
    id: 8,
    image:
      "https://photo2.tinhte.vn/data/attachment-files/2024/01/8240230_cover-frame_Ces241.jpg",
    title: "CES24 id 8",
    author: "Lư Thế Nghĩa",
  },
  {
    id: 9,
    image:
      "https://photo2.tinhte.vn/data/attachment-files/2024/01/8240230_cover-frame_Ces241.jpg",
    title: "CES24 id 9",
    author: "Lư Thế Nghĩa",
  },
  {
    id: 10,
    image:
      "https://photo2.tinhte.vn/data/attachment-files/2024/01/8240230_cover-frame_Ces241.jpg",
    title: "CES24 id 10",
    author: "Lư Thế Nghĩa",
  },
];

const NewsItem = ({ image, title, author, id }) => (
  <div className={`news-item ${id === 1 ? "first" : ""}`}>
    <img src={image} alt={title} className="news-image" />
    <div className="news-content">
      <h3 className="news-title">{title}</h3>
      <p className="news-author">{author}</p>
    </div>
  </div>
);

const SidebarItem = ({ title }) => (
  <div className="sidebar-item">
    <h3 className="sidebar-title">{title}</h3>
  </div>
);

function News() {
  // Hiển thị 4 bài tối đa phần news chính
  const mainNewsArticles = articles.slice(0, 4);

  // Hiển thị tối đa 8 bài phần sidebar
  const sidebarArticles = articles.slice(4, 12);

  return (
    <div className="news-layout">
      <div className="news-container">
        {mainNewsArticles.map((article) => (
          <NewsItem key={article.id} {...article} />
        ))}
      </div>
      <aside className="news-sidebar">
        <h2 className="sidebar-heading">Xem nhanh</h2>
        {sidebarArticles.map((article) => (
          <SidebarItem key={article.id} title={article.title} />
        ))}
      </aside>
    </div>
  );
}

export default News;
