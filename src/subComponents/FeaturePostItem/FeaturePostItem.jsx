export function FeaturePostItem ({number,author}){

    
  return <div className="feature-post-item">
    
    <div className="feature-post-number">#{number}</div>
    <img src={author.profileImage ? author.profileImage : "default"} alt={author.username} className="feature-post-author-image" />
    <img src={image} alt={title} className="feature-post-image" />
    <div className="feature-post-content">
      <Link to={`/post/${_id}`} className="feature-post-title">
        <h3>{title}</h3>
      </Link>
      <p className="feature-post-date">Tạo lúc: {moment(createDate).format('HH:mm:ss [ngày] DD/MM/YYYY')}</p>
      <p className="feature-post-author">Author: {author.username}</p>
    </div>
  </div>
  }