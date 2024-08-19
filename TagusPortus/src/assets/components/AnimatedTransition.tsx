import { motion, AnimatePresence } from "framer-motion"

interface MyComponentProps {
  isVisible: boolean;
}


export const MyComponent: React.FC<MyComponentProps> = ({ isVisible }) => (
  <AnimatePresence>
    {isVisible && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
    )}
  </AnimatePresence>
)