import './index.scss'
import React from 'react'
import Rez from '../../assets/images/resume.png'

const Resume = () => {


    return (
            <div className='resume-container'>
            <h1>Hello World</h1>
                <img id='resume' src={Rez} alt='resume' />
            </div>
    )
}

export default Resume