import { useState, useEffect, useCallback } from 'react'

function Home() {

  // Set the banner Images
  const bannerImages = [
    '/images/luxury-house1-sml.png',
    '/images/luxury-house2-sml.png',
    '/images/luxury-house3-sml.png'
  ]

  //Logic for handling the automatic change of the images and its animation
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  //Logic for the transition animation
  const goToNextImg = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)

    setCurrentImageIndex(nextImageIndex);
    setNextImageIndex((prevNext) => (prevNext + 1) % bannerImages.length);

    setTimeout(() => {
      setIsTransitioning(false)
    }, 750); // Match this with the CSS animation duration
  }, [isTransitioning, nextImageIndex, bannerImages.length])

  //Cleanup the timer when the page unmounts
  useEffect(() => {
    const interval = setInterval(goToNextImg, 1500)
    return () => clearInterval(interval)
  }, [goToNextImg])

  return (
    <div className="home-container">
      <img
        className={`main-carrousel-imgs current-image ${isTransitioning ? 'sliding-out' : ''}`}
        src={bannerImages[currentImageIndex]}
        alt="a photograph of a luxurious home"
      />
      <img
        className={`main-carrousel-imgs next-image ${isTransitioning ? 'sliding-in' : ''}`}
        src={bannerImages[nextImageIndex]}
        alt="a photograph of a luxurious home"
      />
    </div>
  )
}

export default Home