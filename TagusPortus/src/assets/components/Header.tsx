import NavBarSmlScreen from './NavBarSmlScreen'
import { useState, useEffect } from 'react'

//App Header

const Header: React.FC = () => {

    //Logic to check the screen width, to adjust which navbar to show
    const [isLargeViewPort, setIsLargeViewPort] = useState<boolean>(window.innerWidth >= 1250)

    useEffect(() => {
        const handleResize = () => {
            setIsLargeViewPort(window.innerWidth >= 1250);
        };

        // Trigger the resize listener
        window.addEventListener('resize', handleResize);

        // Cleanup the resize listener upon unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    console.log(isLargeViewPort)

    return (
        <>
            <NavBarSmlScreen />
        </>
    );
};

export default Header;
