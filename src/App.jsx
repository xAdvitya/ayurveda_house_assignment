import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [activeIndex, setActiveIndex] = useState(null);

  const images = [
    {
      src: 'https://olympiafitnessri.com/wp-content/uploads/2021/03/People-doing-pushups-together-in-a-health-club-class-853407238_5976x3984-scaled-e1615396175580.jpeg',
      alt: 'Image 1',
      text: 'Workout',
    },
    {
      src: 'https://images.healthshots.com/healthshots/en/uploads/2023/05/10200007/exercise.jpg',
      alt: 'Image 2',
      text: 'Mobility',
    },
    {
      src: 'https://t3.ftcdn.net/jpg/00/95/32/40/240_F_95324016_YSrMJOWsBGMbRiUrYL31JNRtxBREPAAo.jpg',
      alt: 'Image 3',
      text: 'Training',
    },
  ];

  useEffect(() => {
    function handleMouseLeave() {
      setActiveIndex(null);
    }

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="image-container">
      {images.map((image, index) => (
        <div
          key={index}
          className={`image-wrapper ${activeIndex === index ? 'active' : ''}`}
          onMouseEnter={() => setActiveIndex(index)}
        >
          <img src={image.src} alt={image.alt} className="image" />
          <div className="image-text">{image.text}</div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/318/318476.png"
            alt="arrow icon"
            className="image-icon"
          />
        </div>
      ))}
    </div>
  );
}

export default App;
