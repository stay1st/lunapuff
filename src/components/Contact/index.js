import './index.scss'
import { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { useMap } from 'react-leaflet/hooks'
import { Marker } from 'react-leaflet'
import { Popup } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const formReferance = useRef()

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 2700)
  }, [])

  const send = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_jv18o57',
        'template_vdjc4kc',
        formReferance.current,
        'aIk0RhmicQUA7t3yZ'
      )
      .then(
        () => {
          alert('Message sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send message, Please try again!')
        }
      )
  }

  return (
    <div className="container contact-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['C', 'o', 'n', 't', 'a', 'c', 't']}
            idx={15}
          />
        </h1>
        <h3>Looking to create together? You can reach me here!</h3>
        <div className="contact-form">
          <form ref={formReferance} onSubmit={send}>
            <ul>
              <li className="half">
                <input type="text" name="name" placeholder="Name" required />
              </li>
              <li className="half">
                <input type="email" name="email" placeholder="Email" required />
              </li>
              <li>
                <input
                  placeholder="Subject"
                  type="text"
                  name="subject"
                  requried
                />
              </li>
              <li>
                <textarea
                  placeholder="Message"
                  name="message"
                  required
                ></textarea>
              </li>
              <li>
                <input
                  type="submit"
                  className="flat-button"
                  value="SEND"
                ></input>
              </li>
            </ul>
          </form>
        </div>
      </div>
      <div className="info-map">
        Joshua Crawford,
        <br />
        U.S.,
        <br />
        Pittsburgh PA,
        <br />
      </div>
      <div className="map-wrap" id="map">
        <MapContainer
          center={[40.4406, -79.9959]}
          zoom={12}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[40.4406, -79.9959]}>
            <Popup>
              My location. 
              <br />
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  )
}

export default Contact
