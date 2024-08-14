import { useState, useEffect, useCallback } from 'react';
import LoadingComponent from '../components/LoadingComponent';

function Home() {
  const bannerImages = [
    '/images/luxury-house1-sml.png',
    '/images/luxury-house3-sml.png',
    '/images/luxury-house2-sml.png'
  ];

  // Initial States
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [loadedImages, setLoadedImages] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  // Preload all images and set the isLoaded state to true once done
  useEffect(() => {
    let loadedCount = 0

    const handleImageLoad = () => {
      loadedCount += 1
      setLoadedImages(loadedCount)
    };

    bannerImages.forEach((src) => {
      const img = new Image()
      img.src = src;
      img.onload = handleImageLoad;
      img.onerror = () => console.error(`Failed to load image: ${src}`)
    });
  }, [bannerImages]);

  // Run the image carousel when all the images have been downloaded
  useEffect(() => {
    if (loadedImages === bannerImages.length) {
      setIsLoaded(true)
    }
  }, [loadedImages, bannerImages.length])

  // Handles the animation logic
  const goToNextImg = useCallback(() => {
    if (isTransitioning) return

    setIsTransitioning(true)

    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bannerImages.length)
      setIsTransitioning(false)
    }, 750); // CSS animation duration
  }, [isTransitioning, bannerImages.length])

  useEffect(() => {
    if (!isLoaded) return;

    const interval = setInterval(goToNextImg, 3500);

    // Cleanup timers on unmount
    return () => {
      clearInterval(interval)
    };
  }, [goToNextImg, isLoaded])

  return (
    <div className='home-container'>
      {!isLoaded ? (
        <LoadingComponent />
      ) : (
        <section className="banner-images-container">
          <img
            className={`main-carrousel-img ${isTransitioning ? 'sliding-out' : 'sliding-in'}`}
            src={bannerImages[currentImageIndex]}
            alt="a photograph of a luxurious home"
          />
        </section>
      )}

      <section className='home-banner'>
        <p>Se tem um <strong>sonho</strong></p>
        <p>Nós tornamo-lo <strong>realidade</strong></p>
      </section>

      <section className='banner-displays'>
        <div className='banner-display-section'>
          <img src="/icons/icon-house.png" alt="An icon representing an house" className='banner-icons' />
          <div className='banner-display-info'>
            <h2>Pequenos Projetos</h2>
            <p>Nós podemos ajudá-lo a remodelar as divisões da sua casa, tornando-as elegantes, funcionais e modernas.</p>
          </div>
        </div>
        <div className='banner-display-section'>
          <img src="/icons/icon-room.png" alt="An icon representing a room" className='banner-icons' />
          <div className='banner-display-info'>
            <h2>Grandes Projetos</h2>
            <p>Está à procura de construir a casa dos seus sonhos?
              <br></br>
              Podemos transformar o seu sonho na sua próxima casa.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;