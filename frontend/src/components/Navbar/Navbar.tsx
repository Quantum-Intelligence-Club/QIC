import './Navbar.css';
import Link from "next/link";
import { ThemeToggle } from "../ThemeToggle";

export function Navbar() {
  return (
    <nav>
      <div className="logos">
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 'inherit', textDecoration: 'none', color: 'inherit' }}>
          <img src="/logo.png" alt="QIC Logo" id="logo-img" />
          <span id="logo-text">QIC</span>
        </Link>
      </div>
      <div className="right">
        <div className="part-1">
          <Link href="/"><h4 className="hovering-elements">home</h4></Link>
          <Link href="/events"><h4 className="hovering-elements">events</h4></Link>
          <Link href="/blogs"><h4 className="hovering-elements">blogs</h4></Link>
          <Link href="/#team"><h4 className="hovering-elements">team</h4></Link>
          <Link href="/gallery"><h4 className="hovering-elements">gallery</h4></Link>
        </div>
        <div className="part-2">
          <button>join us</button>
          <div className="links">
            <div className="link">
              <a href="#">in</a>
            </div>
            <div className="link">
              <a href="#">pi</a>
            </div>
            <div className="link">
              <a href="#">tw</a>
            </div>
          </div>
          <ThemeToggle />
          <i className="ri-menu-fill"></i>
        </div>
      </div>
    </nav>
  );
}
