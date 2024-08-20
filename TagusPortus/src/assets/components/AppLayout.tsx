//Layout of the application
import { Outlet, useLocation } from "react-router-dom"

//Animated Transition between pages
import { AnimatePresence, motion, Variants } from "framer-motion";

// Components Imports
import Header from "./Header"
import Footer from "./Footer"

//Typescript for the animations
const pageVariants: Variants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
};

const pageTransition = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.5,
  delay: 0.1,
};

const AppLayout: React.FC = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial="initial"
          animate="in"
          variants={pageVariants}
          transition={pageTransition}
        >
          <div className="content-container">
            <Outlet />
            <Footer />
          </div>
        </motion.div>
      </AnimatePresence>

    </>
  );
};

export default AppLayout;