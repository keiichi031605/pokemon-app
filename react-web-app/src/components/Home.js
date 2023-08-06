import React, { useState, useRef } from 'react';
import "../styles/app.css";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio('/images/home_bgm.mp3'));

  const handlePlay = () => {
    audioRef.current.play();
    setIsPlaying(true);
  }

  const handlePause = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setIsPlaying(false);
  }

  return (
    <div>
      <div className="viewport">
        <div className="viewport-top">
          <header className="site-head">
            <div className="container">
              <div className="site-mast">
                <div className="site-mast-left">
                  <Link to="/">
                    <img
                      className="site-logo"
                      src='/images/monster_ball.png'
                      alt='logo'
                    />
                  </Link>
                </div>
                <div className="site-mast-right">
                  <button
                    className="site-nav-button"
                    onClick={isPlaying ? handlePause : handlePlay}
                  >
                    { isPlaying ? 'Pause BGM' : 'Play BGM'}
                  </button>
                </div>
              </div>
                <div className="site-banner">
                  <div>
                    <img
                      className="site-banner-title"
                      src='/images/pokemon_title.png'
                      alt='title'
                    />
                  </div>
                  <div className='site-banner-ash-pokemon'>
                    <img
                      className="site-banner-ash"
                      src='/images/ash.png'
                      alt='ash'
                    />
                    <img
                      className="site-banner-pokemon"
                      src='/images/pokemon/bulbasaur.png'
                      alt='ash'
                    />
                  </div>
                    <img
                      className="site-banner-keiichi"
                      src='/images/keiichi.png'
                      alt='ash'
                    />
                  <div>
                  </div>
                </div>
              <nav className="site-nav">
                <div className="site-nav-left">
                  <Navigation />
                </div>
                <div className="site-nav-right">
                  <Link
                      className="site-nav-button"
                      to="/about"
                  >
                      About
                  </Link>
                </div>
              </nav>
            </div>
          </header>

          <main className="site-main">
            {/* contents */}
          </main>
        </div>

        <div className="viewport-bottom">
          <footer className="site-foot">
            <div className="site-foot-nav container">
              <div className="site-foot-nav-left">
                Developed by Keiichi
              </div>
              <div className="site-foot-nav-right">

              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
