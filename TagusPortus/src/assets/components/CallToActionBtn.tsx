import React from 'react';
import { Link } from 'react-router-dom';

//Reusable Call to Action Button, for page navigation 
interface CallToActionBtnProps {
    link: string;
    description: string;
}

const CallToActionBtn: React.FC<CallToActionBtnProps> = ({ link, description }) => {
    return (
        <Link to={link} className='cta-btn'>
            {description}
        </Link>
    );
};

export default CallToActionBtn;
