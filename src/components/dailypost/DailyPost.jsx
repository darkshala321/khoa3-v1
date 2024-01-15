import React from 'react';
import './DailyPost.css';


const dailyPosts = [
    {
        id: 1,
        image: 'https://photo2.tinhte.vn/data/attachment-files/2024/01/8240230_cover-frame_Ces241.jpg',
        title: 'CES24: Satechi ra mắt cục sạc nhiều cổng gây ấn tượng 145W, 4 cổng C, thay đổi được chân cắm sạc',
        excerpt: 'Nội dung bài viết ABCXYZ',
        author: 'Trần Hoàng Long'
      },
      {
        id: 2,
        image: 'https://photo2.tinhte.vn/data/attachment-files/2024/01/8240230_cover-frame_Ces241.jpg',
        title: 'CES24: Trên tay 3i Intelligent Cleaning Station H1 Pro - Trạm làm sạch thông minh không cần nước',
        excerpt: 'Nội dung bài viết ABCXYZ',
        author: 'cuhiep'
      },
      {
        id: 3,
        image: 'https://photo2.tinhte.vn/data/attachment-files/2024/01/8240230_cover-frame_Ces241.jpg',
        title: 'CES24: CORSAIR giới thiệu bàn phím K55 CORE, tản nhiệt khí A115, thúng máy hơi cả',
        excerpt: 'Nội dung bài viết ABCXYZ',
        author: 'Lư Thế Nghĩa'
      },
      {
        id: 4,
        image: 'https://photo2.tinhte.vn/data/attachment-files/2024/01/8240230_cover-frame_Ces241.jpg',
        title: 'CES24: CORSAIR giới thiệu bàn phím K55 CORE, tản nhiệt khí A115, thúng máy hơi cả',
        excerpt: 'Nội dung bài viết ABCXYZ',
        author: 'Lư Thế Nghĩa'
      },
      {
        id: 5,
        image: 'https://photo2.tinhte.vn/data/attachment-files/2024/01/8240230_cover-frame_Ces241.jpg',
        title: 'CES24 id 5',
        excerpt: 'Nội dung bài viết ABCXYZ',
        author: 'Lư Thế Nghĩa'
      },
      {
        id: 6,
        image: 'https://photo2.tinhte.vn/data/attachment-files/2024/01/8240230_cover-frame_Ces241.jpg',
        title: 'CES24 id 6',
        excerpt: 'Nội dung bài viết ABCXYZ',
        author: 'Lư Thế Nghĩa'
      },
      {
        id: 7,
        image: 'https://photo2.tinhte.vn/data/attachment-files/2024/01/8240230_cover-frame_Ces241.jpg',
        title: 'CES24 id 7',
        excerpt: 'Nội dung bài viết ABCXYZ',
        author: 'Lư Thế Nghĩa'
      },
      {
        id: 8,
        image: 'https://photo2.tinhte.vn/data/attachment-files/2024/01/8240230_cover-frame_Ces241.jpg',
        title: 'CES24 id 8',
        excerpt: 'Nội dung bài viết ABCXYZ',
        author: 'Lư Thế Nghĩa'
      },
      {
        id: 9,
        image: 'https://photo2.tinhte.vn/data/attachment-files/2024/01/8240230_cover-frame_Ces241.jpg',
        title: 'CES24 id 9',
        excerpt: 'Nội dung bài viết ABCXYZ',
        author: 'Lư Thế Nghĩa'
      },
      {
        id: 10,
        image: 'https://photo2.tinhte.vn/data/attachment-files/2024/01/8240230_cover-frame_Ces241.jpg',
        title: 'CES24 id 10',
        excerpt: 'Nội dung bài viết ABCXYZ',
        author: 'Lư Thế Nghĩa'
      }
];

const DailyPostItem = ({ image, title, excerpt, author }) => (
    <div className="daily-post-item">
      {image && <img src={image} alt={title} className="daily-post-image" />}
      <div className="daily-post-content">
        <h3 className="daily-post-title">{title}</h3>
        <p className="daily-post-excerpt">{excerpt}</p>
        <p className="daily-post-author">{author}</p>
      </div>
    </div>
  );
  
  const DailyPost = () => {
    // Giới hạn 5 bài viết
    const limitedPosts = dailyPosts.slice(0, 5);
  
    return (
      <div className="daily-post-container">
        {limitedPosts.map((post) => (
          <DailyPostItem key={post.id} {...post} />
        ))}
      </div>
    );
  };
  
  export default DailyPost;