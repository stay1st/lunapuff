import './index.scss';
import React, { useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    return (
        <div className='container portfolio-page'>
            <h1 className='page-title'>
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o']}
                    idx={15}
                />
            </h1>
            <div>{/*renderPortfolio()*/}</div>
        </div>
    )
}

export default Portfolio;