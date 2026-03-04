import './Footer.css';
export function Footer() {
  return (
    <footer>
      <div className="line"></div>
      <div className="wrap-main">
        <div className="main">
          <div className="top">
            <div className="t-top">
               <div className="logos">
                 <img src="/logo.png" alt="QIC Logo" id="logo-img-footer" />
                 <span id="logo-text-footer">QIC</span>
               </div>
              <div className="address">
                <p>VIT Bhopal University</p>
                <p>Sehore, Madhya Pradesh 466114</p>
              </div>
            </div>
            <div className="links">
              <div className="link"><a href="#">in</a></div>
              <div className="link"><a href="#">pi</a></div>
              <div className="link"><a href="#">tw</a></div>
            </div>
          </div>
          <div className="line"></div>
          <div className="bottom">
            <div className="elem">
              <h3>Pages</h3>
              <h4 className="hovering-elements">Home</h4>
              <h4 className="hovering-elements">Services</h4>
              <h4 className="hovering-elements">Studio</h4>
              <h4 className="hovering-elements">Contact</h4>
              <button>more templates</button>
            </div>
            <div className="line"></div>
            <div className="elem">
              <h3>CMS</h3>
              <h4 className="hovering-elements">Work</h4>
              <h4 className="hovering-elements">Work Single</h4>
              <h4 className="hovering-elements">Blog</h4>
              <h4 className="hovering-elements">Blog Single</h4>
            </div>
            <div className="line"></div>
            <div className="elem">
              <h3>Utility Pages</h3>
              <h4 className="hovering-elements">404 Error Page</h4>
              <h4 className="hovering-elements">Styleguide</h4>
              <h4 className="hovering-elements">Licensing</h4>
            </div>
          </div>
        </div>
      </div>
      <div id="lastline" className="line"></div>
      <div className="f-bottom">
        <h4>© made by <a href="#">QIC Dev Team</a></h4>
        <div className="right">
          <h5 className="hovering-elements">privacy</h5>
          <h5 className="hovering-elements">imprint</h5>
        </div>
      </div>
    </footer>
  );
}
