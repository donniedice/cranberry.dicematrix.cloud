import React, { useEffect } from 'react';
import './Home.css';

function Home() {
  useEffect(() => {
    const adjustPageHeight = () => {
      const homePage = document.querySelector('.home-page');
      const backgroundImageUrl = getComputedStyle(homePage).backgroundImage.slice(5, -2);

      const backgroundImage = new Image();
      backgroundImage.src = backgroundImageUrl;

      backgroundImage.onload = () => {
        const imageAspectRatio = backgroundImage.naturalHeight / backgroundImage.naturalWidth;

        const viewportWidth = window.innerWidth;
        const calculatedHeight = viewportWidth * imageAspectRatio;

        homePage.style.height = `${calculatedHeight}px`;

        const contentHeight = homePage.scrollHeight;
        if (contentHeight > calculatedHeight) {
          homePage.style.height = `${contentHeight}px`;
        }
      };
    };

    adjustPageHeight();
    window.addEventListener('resize', adjustPageHeight);

    return () => {
      window.removeEventListener('resize', adjustPageHeight);
    };
  }, []);

  return (
    <section className="home-page">
      <div className="home-content">
        <div className="home-extra-text">
          <h2></h2>
          <p></p>
        </div>
        <div className="home-bottom-cards">
          <div className="home-card">Card 1</div>
          <div className="home-card">Card 2</div>
          <div className="home-card">Card 3</div>
        </div>
      </div>
    </section>
  );
}

export default Home;
