import { useRef, useEffect } from 'react'
import Data from '../Shared/Data'
import './LogoScroll.css'

const LogoScroll = () => {
  const images = Data.CarMakes

  return (
    <div className="logo-scroll-container">
      <Marquee images={images} />
    </div>
  )
}

const Marquee = ({ images, speed = 50 }) => {
  const marqueeRef = useRef(null)

  useEffect(() => {
    const marquee = marqueeRef.current
    let startPosition = 0

    const animateMarquee = () => {
      startPosition -= 1
      if (Math.abs(startPosition) >= marquee.scrollWidth / 2) {
        startPosition = 0
      }
      marquee.style.transform = `translateX(${startPosition}px)`
      requestAnimationFrame(animateMarquee)
    }

    animateMarquee()

    return () => cancelAnimationFrame(animateMarquee)
  }, [])

  return (
    <div className="marquee-container">
      <div ref={marqueeRef} className="marquee-content">
        {[...images, ...images].map((image, index) => (
          <div key={index} className="marquee-item">
            <img src={image.icon} alt={`${image.name} nome`} className="marquee-image" />
            <div className="separator"></div>
            <h2 className="marquee-text">{image.name}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LogoScroll
