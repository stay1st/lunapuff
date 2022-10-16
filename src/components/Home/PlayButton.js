import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'

const PlayButton = (props) => {
  const [buttonId, setButtonId] = useState('')

  const getLuna = function (audio) {
    const lunaIntro = document.getElementById(audio)
    lunaIntro.currentTime = 0
    const lunaPromise = lunaIntro.play()
    if (lunaPromise !== undefined) {
      lunaPromise
        .then((_) => {
          console.log('%caudio played with button', 'color: green;')
        })
        .catch(function (err) {
          console.log(err)
        })
    }
    return setButtonId('done-play');
  }

  const handlePlay = () => {
    getLuna('luna-intro');
     props.toggle = false;
    setTimeout(() => {
      'luna-intro'.currentTime = 0;
      setButtonId('pulse-play')
      getLuna('luna-next-step')
    }, 10000).then(() => {
      return clearTimeout()
    })
  }

  if (props.toggle === false) {
    return (
      <div 
        id={buttonId} 
        onClick={handlePlay} 
        style={{
          animation: 'easeInOut 1.3s 2s linear',
        }}
        >
        <FontAwesomeIcon
          className='play-btn'
          icon={faPlayCircle}
          style={{
            height: '30px',
            width: '50px',
            cursor: 'pointer',
            animation: 'fadeIn 1.6s 2.3s infinite',
          }}
          color="#00ffc2"
        />
        <div id='play-text' style={{
          color: '#00ffc2',
          fontSize: '18px',
          fontWeight: '400',
          cursor: 'pointer',
          animation: 'pulse 1.6s linear infinite',
        }}>Play</div>
      </div>
    )
  }
  return null
}

export default PlayButton
