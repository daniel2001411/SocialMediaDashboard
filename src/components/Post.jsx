import React from 'react';
import { FiHeart, FiMessageSquare, FiShare2 } from 'react-icons/fi';
import '../styles/components/post.css';

const Post = ({ author, avatar, time, content, likes, comments, shares }) => {
  return (
    <div className="post-card">
      <div className="post-header">
        <img src={avatar} alt={author} className="post-avatar" />
        <div className="post-author">
          <h4>{author}</h4>
          <p className="post-time">{time}</p>
        </div>
      </div>
      <div className="post-content">
        <p>{content}</p>
      </div>
      <div className="post-actions">
        <button className="post-action">
          <FiHeart /> {likes}
        </button>
        <button className="post-action">
          <FiMessageSquare /> {comments}
        </button>
        <button className="post-action">
          <FiShare2 /> {shares}
        </button>
      </div>
    </div>
  );
};

export default Post;