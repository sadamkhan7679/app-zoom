import React from 'react'
import PropTypes from 'prop-types'
import phoneBg from './img/phone-bg.svg'
import app1 from './img/app1.png'
import app2 from './img/app2.png'
import app3 from './img/app3.png'
import app4 from './img/app4.png'
import styles from './AppDemo.module.css'
import FadeTransition, { FADE_DIRECTION } from '../../../common/FadeTransition/FadeTransition'

const AppDemo = ({ navIndex }) => {
  // Constants
  const appSrcs = [
    app1,
    app2,
    app3,
    app4,
  ]
  // Render
  return (
    <div className={styles.appDemo}>
      <img
        className={styles.image}
        src={phoneBg}
        alt="Smartphone Background"
      />
      {
        appSrcs.map((appSrc, index) => (
          <div
            className={styles.imageContainer}
            key={appSrc}
          >
            <FadeTransition
              tag="img"
              direction={FADE_DIRECTION.NONE}
              delay="0.0s"
              show={index === navIndex}
              className={styles.image}
              src={appSrc}
              alt="Smartphone App Screenshot"
            />
          </div>
        ))
      }
    </div>
  )
}

AppDemo.propTypes = {
  navIndex: PropTypes.number.isRequired,
}

export default AppDemo
