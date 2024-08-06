import { useState } from 'react'
import Hamburguer from 'hamburger-react'
import { AnimatePresence, motion } from 'framer-motion'

function HamburgerMenu() {
    const [isOpen, setIsOpen] = useState(false)


    return (
        <div >
            <Hamburguer
                toggled={isOpen}
                toggle={setIsOpen}
                color="#774936"
                easing='ease-in'
                rounded
                label='Show navigation bar'
            />
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed top-0 left-0 w-full h-full bg-white"
                    >
                        <ul className="flex flex-col items-center justify-center h-full space-y-4">
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Works</li>
                            <li>Services</li>
                            <li>Contacts</li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default HamburgerMenu