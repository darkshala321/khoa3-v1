import React, { useState } from "react";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Gửi thông tin bài viết đến server hoặc thực hiện các xử lý khác ở đây
    console.log("Đã gửi bài viết:", { title, content });
    // Reset các trường nhập liệu
    setTitle("");
    setContent("");
  };

  return (
    <div>
      <h2>Tạo bài viết mới</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Tiêu đề:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="content">Nội dung:</label>
          <textarea
            id="content"
            value={content}
            onChange={(event) => setContent(event.target.value)}
          />
        </div>
        <button type="submit">Đăng bài</button>
      </form>
    </div>
  );
}

export default CreatePost;
