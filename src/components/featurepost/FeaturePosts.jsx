import React from 'react';
import './FeaturePosts.css';

const featurePosts = [
    { id: 1, title: 'Trung Quốc công bố pin hạt nhân, dự sức mạnh vận hành 50 năm liên tục', author: 'P.W' },
    { id: 2, title: 'CES24: Trên tay ASUS ZenScreen Fold OLED MQ17QH - Màn hình di động có thể gấp đôi', author: 'cuhiep' },
    { id: 3, title: '#Tinhtelookback màn hình LG 27UP600: 27" là đủ dùng cho văn phòng, vị 4K mà đánh đổi tiện ích khác', author: 'Lê Huyền Vân' },
    { id: 4, title: '5 triệu đồng mua máy ảnh gì chơi Tết: Fujifilm X100', author: 'Hoàng Hải.' },
    { id: 5, title: 'Sống ở đời, mỗi người trong chúng ta đều có quyền được lựa chọn', author: 'sangtao70' },
    { id: 6, title: 'Bàn chải điện DR.BEI GY1 có thực sự tốt như lời đồn?', author: 'Th.Khoa' }
];

const FeaturePostItem = ({ number, title, author }) => (
    <div className="feature-post-item">
      <div className="feature-post-number">#{number}</div>
      <div className="feature-post-content">
        <h3 className="feature-post-title">{title}</h3>
        <p className="feature-post-author">{author}</p>
      </div>
    </div>
  );
  
  const FeaturePosts = () => {
    // Chỉ lấy 6 bài viết
    const limitedPosts = featurePosts.slice(0, 6);
  
    return (
      <div className="feature-posts-container">
        <h2 className="feature-posts-heading">Bài nổi bật</h2>
        <div className="feature-posts-grid">
          {limitedPosts.map((post, index) => (
            <FeaturePostItem key={post.id} number={index + 1} {...post} />
          ))}
        </div>
      </div>
    );
  };
  
export default FeaturePosts;