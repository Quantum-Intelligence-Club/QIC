"use client";

import { useRef, useState, useEffect } from "react";
import { VolumeX } from "lucide-react";

/**
 * Modern MusicBox Component
 * Uses a CSS-based equalizer animation for the playing state
 */
const MusicBox = ({ showMusicBurger = true }: { showMusicBurger?: boolean }) => {
  const backgroundMusicRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const music = backgroundMusicRef.current;
    if (!music) return;

    music.volume = 0.5;

    const startAudio = () => {
      music.play()
        .then(() => {
          setIsPlaying(true);
          // Remove listeners once playing starts
          window.removeEventListener("click", startAudio);
          window.removeEventListener("touchstart", startAudio);
        })
        .catch(e => {
          console.log("Play failed:", e);
        });
    };

    // Try to play immediately (might be blocked)
    startAudio();

    // Add listeners for interaction to trigger play if blocked
    window.addEventListener("click", startAudio);
    window.addEventListener("touchstart", startAudio);

    return () => {
      window.removeEventListener("click", startAudio);
      window.removeEventListener("touchstart", startAudio);
    };
  }, []);

  const toggleMusic = () => {
    if (isPlaying) {
      backgroundMusicRef.current?.pause();
      setIsPlaying(false);
    } else {
      backgroundMusicRef.current?.play()
        .then(() => setIsPlaying(true))
        .catch(e => console.log("Play blocked:", e));
    }
  };

  return (
    <>
      <div
        className={`fixed z-[999] flex items-center justify-center transition-all duration-300 bg-black/80 backdrop-blur-md rounded-full cursor-pointer w-12 h-12 md:w-16 md:h-16 bottom-5 right-5 sm:bottom-10 sm:right-10 hover:scale-110 shadow-[0_0_20px_rgba(255,255,255,0.1)] border border-white/10 ${
          showMusicBurger ? "scale-100 opacity-100" : "scale-0 opacity-0 pointer-events-none"
        }`}
        onClick={toggleMusic}
        title="Toggle Music"
      >
        <div className="flex items-center justify-center w-full h-full text-white">
          {isPlaying ? (
            <div className="flex items-end justify-center gap-[3px] w-6 h-5">
              <span className="w-1 bg-white rounded-full h-[30%] animate-[soundWave_1.2s_ease-in-out_infinite_0.1s]"></span>
              <span className="w-1 bg-white rounded-full h-[100%] animate-[soundWave_1s_ease-in-out_infinite_0.2s]"></span>
              <span className="w-1 bg-white rounded-full h-[60%] animate-[soundWave_0.8s_ease-in-out_infinite_0.4s]"></span>
              <span className="w-1 bg-white rounded-full h-[80%] animate-[soundWave_1.1s_ease-in-out_infinite_0.3s]"></span>
            </div>
          ) : (
            <VolumeX className="w-6 h-6 text-white/70" />
          )}
        </div>
        
        <audio
          ref={backgroundMusicRef}
          src="/music/website-background-song.mp3"
          loop
          preload="auto"
          className="hidden"
        ></audio>
      </div>
    </>
  );
};

export default MusicBox;
