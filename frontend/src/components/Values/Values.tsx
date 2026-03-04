import './Values.css';
import '../mission-bento.css';

export function Values() {
  return (
    <section className="view-2">
      <div className="top" style={{ position: 'relative' }}>

        <div className="text mission-bento-card">
          <div style={{ zIndex: 10 }}>
            <h5 style={{ opacity: 0.6 }}>our mission</h5>
            <h1>Our vision is to bridge the gap between Quantum Theory and AI Innovation.</h1>
          </div>
          
          {/* Supplementary Content Boxes filling the negative space */}
          <div className="mission-supplement-boxes">
             <div className="mission-sub-box glass-box">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                   <i className="ri-group-line" style={{ fontSize: '1rem', opacity: 0.7 }}></i>
                   <span>Community Impact</span>
                </div>
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                   <div>
                     <span className="stat-number" style={{ fontWeight: 800, fontFamily: 'Syne' }}>500+</span>
                     <p>Active Members</p>
                   </div>
                   <div>
                     <span className="stat-number" style={{ fontWeight: 800, fontFamily: 'Syne' }}>20+</span>
                     <p>Research Projects</p>
                   </div>
                </div>
             </div>
             
             <div className="mission-sub-box gradient-box">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                   <i className="ri-flask-line" style={{ fontSize: '1rem', opacity: 0.8 }}></i>
                   <span>The QIC Lab</span>
                </div>
                <p>
                  Exclusive access to quantum simulation environments and AI training clusters for hands-on research.
                </p>
             </div>
          </div>

          <button className="mission-bento-btn">explore projects</button>
        </div>

        {/* Orange Accent Card — interlocks below the dark card */}
        <div className="mission-accent-card">
          <div className="accent-card-content">
            <div className="accent-icon-row">
              <i className="ri-lightbulb-flash-line"></i>
              <span>Innovation Hub</span>
            </div>
            <h3>Workshops, Hackathons & Live Demos</h3>
            <p>Join hands-on sessions where theory meets practice. Build real quantum circuits, train AI models, and collaborate on cutting-edge research.</p>
          </div>
          <button className="accent-card-btn">View Events <i className="ri-arrow-right-up-line"></i></button>
        </div>

      </div>
      <div className="line"></div>
      <div className="bottom">
        <div className="elem">
          <svg viewBox="0 0 60 59" id="svg10492846895">
             <path d="M 60 23.371 C 60 10.485 49.52 0 36.64 0 C 35.747 0 34.855 0.052 33.967 0.155 C 33.077 0.257 32.198 0.41 31.326 0.613 C 30.455 0.818 29.6 1.071 28.758 1.373 C 27.916 1.675 27.094 2.026 26.293 2.423 C 25.49 2.819 24.715 3.261 23.964 3.748 C 23.213 4.233 22.492 4.761 21.802 5.331 C 21.112 5.899 20.457 6.506 19.836 7.152 C 19.215 7.796 18.634 8.473 18.092 9.185 C 15.498 10.729 13.285 12.698 11.452 15.095 C 10.584 15.611 9.751 16.179 8.957 16.801 C 8.162 17.424 7.411 18.096 6.704 18.816 C 5.997 19.535 5.339 20.299 4.73 21.104 C 4.122 21.91 3.566 22.75 3.067 23.627 C 2.567 24.505 2.126 25.411 1.744 26.344 C 1.361 27.28 1.04 28.234 0.782 29.21 C 0.522 30.186 0.328 31.175 0.197 32.176 C 0.067 33.177 0.002 34.183 0 35.193 C 0 48.079 10.48 58.563 23.36 58.563 C 24.255 58.563 25.145 58.511 26.035 58.409 C 26.923 58.306 27.802 58.153 28.674 57.949 C 29.545 57.746 30.4 57.493 31.242 57.189 C 32.084 56.887 32.906 56.538 33.707 56.141 C 34.51 55.744 35.285 55.303 36.036 54.816 C 36.787 54.33 37.508 53.803 38.198 53.233 C 38.888 52.664 39.543 52.057 40.164 51.413 C 40.785 50.768 41.366 50.089 41.908 49.377 C 44.5 47.834 46.714 45.864 48.548 43.468 C 49.416 42.953 50.249 42.384 51.043 41.761 C 51.838 41.139 52.589 40.468 53.296 39.747 C 54.003 39.027 54.661 38.264 55.27 37.46 C 55.878 36.654 56.434 35.813 56.933 34.935 C 57.433 34.058 57.874 33.152 58.256 32.218 C 58.639 31.284 58.96 30.328 59.218 29.352 C 59.478 28.376 59.672 27.388 59.803 26.387 C 59.933 25.386 59.998 24.38 60 23.371 Z" fill="currentColor"/>
          </svg>
          <h2>Quantum Research</h2>
          <p>We delve into the fascinating world of quantum mechanics, exploring its potential to revolutionize computing and solve complex problems that were once thought impossible.</p>
        </div>
        <div className="line"></div>
        <div className="elem">
          <svg viewBox="0 0 60 61" id="svg8805052374">
            <path d="M 59.85 29.056 C 59.75 29.014 59.66 29.031 59.584 29.107 L 50.317 38.374 L 50.317 19.597 C 50.317 19.489 50.266 19.414 50.166 19.373 C 50.065 19.331 49.976 19.348 49.9 19.425 L 40.633 28.692 L 40.633 9.914 C 40.625 9.812 40.574 9.742 40.48 9.706 C 40.384 9.669 40.3 9.684 40.225 9.753 L 30.958 19.02 L 30.958 0.242 C 30.955 0.136 30.905 0.063 30.808 0.022 C 30.71 -0.019 30.622 -0.003 30.545 0.07 L 0.07 30.558 C -0.003 30.635 -0.019 30.722 0.022 30.819 C 0.063 30.918 0.136 30.968 0.242 30.969 L 19.009 30.969 L 9.753 40.236 C 9.676 40.313 9.659 40.402 9.7 40.502 C 9.742 40.602 9.817 40.652 9.925 40.652 L 28.688 40.652 L 19.429 49.919 C 19.353 49.997 19.336 50.084 19.376 50.184 C 19.418 50.284 19.492 50.334 19.601 50.334 L 38.368 50.334 L 29.107 59.601 C 29.032 59.679 29.014 59.767 29.056 59.867 C 29.096 59.967 29.171 60.017 29.279 60.017 L 59.756 60.017 C 59.823 60.017 59.881 59.993 59.928 59.947 C 59.976 59.898 60 59.842 60 59.773 L 60 29.29 C 60.004 29.178 59.954 29.1 59.85 29.056 Z" fill="currentColor"/>
          </svg>
          <h2>AI Integration</h2>
          <p>We harness the power of artificial intelligence to enhance quantum simulations, optimize algorithms, and create intelligent systems that push the boundaries of technology.</p>
        </div>
        <div className="line"></div>
        <div className="elem">
          <svg viewBox="0 0 60 60" id="svg10648148794">
            <path d="M 30 60.002 C 13.457 60.002 0 46.543 0 30.002 C 0 13.46 13.457 0 30 0 C 46.543 0 60 13.459 60 30.002 C 60 46.544 46.541 60.002 30 60.002 Z M 30 0.589 C 13.784 0.589 0.587 13.785 0.587 30.002 C 0.587 46.219 13.784 59.412 30 59.412 C 46.218 59.412 59.411 46.219 59.411 30.002 C 59.411 13.785 46.218 0.589 30 0.589 Z" fill="currentColor"/>
          </svg>
          <h2>Community Growth</h2>
          <p>We foster a vibrant and inclusive community of students, researchers, and enthusiasts, providing opportunities for collaboration, learning, and professional development in the field of quantum intelligence.</p>
        </div>
      </div>
    </section>
  );
}
