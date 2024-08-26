//Layout of the application
import { Outlet, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"

//Animated Transition between pages
import { AnimatePresence, motion, Variants } from "framer-motion"

// Components Imports
import Navbar from "./Navbar"
import Footer from "./Footer"

//Typescript for the animations
const pageVariants: Variants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
}

const pageTransition = {
  type: "tween",
  ease: "easeIn",
  duration: 0.5,
}

const AppLayout: React.FC = () => {
  const location = useLocation()

  //Logic to check the screen width, to adjust which navbar and footer to show
  const [isLargeViewPort, setIsLargeViewPort] = useState<boolean>(window.innerWidth >= 1250)

  useEffect(() => {
    const handleResize = () => {
      setIsLargeViewPort(window.innerWidth >= 1250)
    }

    // Trigger the resize listener
    window.addEventListener('resize', handleResize)

    // Cleanup the resize listener upon unmount
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])


  return (
    <>
      <Navbar isLargeViewPort={isLargeViewPort} />

      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial="initial"
          animate="in"
          variants={pageVariants}
          transition={pageTransition}
        >

          <div className="content-container">
            <Outlet context={{ isLargeViewPort }} />
          </div>

        </motion.div >
      </AnimatePresence >

      <Footer isLargeViewPort={isLargeViewPort} />

    </>
  )
}

export default AppLayout