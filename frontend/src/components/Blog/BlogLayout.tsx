import React from 'react';

const BlogHeader = () => {
  return (
    <div className="blog-header">
      {/* Premium SVG Wavy Corners */}
      <svg className="corner-svg top-left" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 60V30Q2 15 15 15T30 2H60" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M6 60V35Q6 20 20 20T35 6H60" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.5"/>
      </svg>
      <svg className="corner-svg top-right" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 2H30Q45 2 45 15T58 30V60" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M0 6H25Q40 6 40 20T54 35V60" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.5"/>
      </svg>
      <svg className="corner-svg bottom-left" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M60 58H30Q15 58 15 45T2 30V0" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M60 54H35Q20 54 20 40T6 25V0" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.5"/>
      </svg>
      <svg className="corner-svg bottom-right" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 58H30Q45 58 45 45T58 30V0" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M0 54H25Q40 54 40 40T54 25V0" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.5"/>
      </svg>

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
