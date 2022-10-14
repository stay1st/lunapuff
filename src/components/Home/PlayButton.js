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
    return 'play-new'
  }

  const handlePlay = () => {
    getLuna('luna-intro')
    setTimeout(() => {
      setButtonId('pulse-play')
      return getLuna('luna-next-step')
    }, 9000)
    return () => {
      clearTimeout(getLuna)
    }
  }

  if (props.toggle === false) {
    return (
      <div className="btn play-btn" id={buttonId} onClick={handlePlay}>
        <FontAwesomeIcon
          icon={faPlayCircle}
          style={{
            height: '30px',
            marginRight: '12px',
            width: '170px',
            marginTop: '9px',
          }}
        />
        Play
      </div>
    )
  }
  return null
}

export default PlayButton
