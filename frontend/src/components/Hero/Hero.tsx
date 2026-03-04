import './Hero.css';
import { MorphingText } from '@/components/ui/morphing-text';

export function Hero() {
  return (
    <div className="content">
      <div className="top">
        <h5>Empowering the future of Quantum & AI</h5>
        <div className="hero-title">
          <h1 className="mobile-title">Quantum Intelligence Club</h1>
          <div className="desktop-title">
            <MorphingText texts={["Quantum Intelligence Club", "VIT Bhopal University"]} />
          </div>
        </div>
      </div>
      <div className="bottom">
        <img src="/hero.jpeg" alt="Hero" />
      </div>
    </div>
  );
}
