import './index.scss'
import React from 'react'
import Rez from '../../assets/images/resume-font-to-lines.svg'
console.log(Rez)

const Resume = () => {


    return (
            <div className='resume-container'>
                <img id='resume' src={Rez} alt='resume' />
            </div>
    )
}

export default Resume