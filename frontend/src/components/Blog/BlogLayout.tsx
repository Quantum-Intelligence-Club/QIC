import React from 'react';

const BlogHeader = () => {
  return (
    <div className="blog-header">
      <h1 className="logo-large">THE QIC BLOG</h1>
      <div className="blog-header-right">
        <p>Insights on quantum intelligence, AI, and the future of computing.</p>
        <div style={{ display: 'flex', gap: '1vw', justifyContent: 'flex-end', marginTop: '1vw', fontSize: '1.5rem' }}>
          <i className="ri-soundcloud-fill" style={{ color: '#fff' }}></i>
          <i className="ri-instagram-line" style={{ color: '#fff' }}></i>
        </div>
      </div>
    </div>
  );
};

export { BlogHeader };
