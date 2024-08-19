//Controls the layout for the rendering of the application

import { Outlet, useLocation } from "react-router-dom"
import NavbarSmlScreen from "./NavBarSmlScreen"
import { AnimatePresence, motion, Variants } from "framer-motion";

//Typescript Variants
const pageVariants: Variants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 },
};

const pageTransition = {
  ease: "easeOut",
  duration: 1,
};

const AppLayout: React.FC = () => {
  const location = useLocation();

  return (
    <>
      <NavbarSmlScreen />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
        >
          <div className="content-container">
            <Outlet />
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default AppLayout;
