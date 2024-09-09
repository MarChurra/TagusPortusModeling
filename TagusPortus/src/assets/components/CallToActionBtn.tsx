import React from 'react'
import { Link } from 'react-router-dom'
import scrollToTop from './ScrollToTop'

//Reusable Call to Action Button, for page navigation 
interface CallToActionBtnProps {
    link: string
    description: string
}

const CallToActionBtn: React.FC<CallToActionBtnProps> = ({ link, description }) => {
    return (
        <Link to={link} className='cta-btn'
            onClick={scrollToTop}>
            {description}
        </Link>
    )
}

export default CallToActionBtn
