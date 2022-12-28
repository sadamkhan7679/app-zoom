import React from 'react'
import PropTypes from 'prop-types'
import image1 from './img/image1.png'
import image2 from './img/image2.png'
import image3 from './img/image3.png'
import wave1 from './img/wave1.svg'
import wave2 from './img/wave2.svg'
import FadeTransition, { FADE_DIRECTION } from '../../../common/FadeTransition/FadeTransition'
import CtaButton from '../../../common/CtaButton/CtaButton'
import classConcat from '../../../../util/ClassConcat'
import styles from './Hero.module.css'
import useOrientation, { ORIENTATION } from '../../../../hooks/useOrientation'

const Hero = ({ isNav }) => {
  // Hooks
  const orientation = useOrientation()
  // Render
  return (
    <>
      <section
        key={Math.random() * 1000 + 'hero'}
        className={classConcat('container-fluid', styles.container)}>
        <div className="row align-items-end">
          <div
            className={classConcat(
              orientation === ORIENTATION.LANDSCAPE
                ? 'col-6' : 'col-12',
              orientation === ORIENTATION.LANDSCAPE
                ? 'order-last' : null,
              'px-5',
            )}
          >
            <div className={styles.imageContainer}>
              <FadeTransition
                tag="img"
                direction={FADE_DIRECTION.RIGHT}
                delay="1.35s"
                show={isNav}
                src={image1}
                alt=""
                className={styles.appImage}
                style={{ zIndex: 0 }}
              />
              <FadeTransition
                tag="img"
                direction={FADE_DIRECTION.NONE}
                delay="0.9s"
                show={isNav}
                src={image2}
                alt=""
                className={styles.appImageMiddle}
                style={{ zIndex: 1 }}
              />
              <FadeTransition
                tag="img"
                direction={FADE_DIRECTION.LEFT}
                delay="1.35s"
                show={isNav}
                src={image3}
                alt=""
                className={styles.appImage}
                style={{ zIndex: 0 }}
              />
            </div>
          </div>
          <div
            className={classConcat(
              orientation === ORIENTATION.LANDSCAPE
                ? 'col-6' : 'col-12',
              orientation === ORIENTATION.LANDSCAPE
                ? 'order-first' : null,
              'px-5',
            )}
          >
            <div className={styles.textContainer}>
              <FadeTransition
                tag="h1"
                delay="0.5s"
                show={isNav}
                className={styles.heading}
              >
                A Partner to build Online Businesses
              </FadeTransition>
              <FadeTransition delay="0.8s" show={isNav}>
                We fund &amp; build online businesses.
              </FadeTransition>
              <div
                className={classConcat('my-md-2', styles.buttonContainer)}
              >
                <CtaButton
                  to="/contact-us"
                  children= "Contact Us"
                  show={isNav}
                />
              </div>
            </div>
          </div>
        </div>
        
      </section>

      <span style={{
        position: "relative",
        display: 'inline-block',
        width: '100%',
        zIndex: -10,
      }}
        className={styles.waveContainer}
      >
        <img
          src={wave1}
          alt="Green wave graphic - dark green."
          className={styles.wave}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1920 937.334"
        />
        <img
          src={wave2}
          alt="Green wave graphic - lighter green."
          className={styles.wave}
          style={{ bottom: '15%' }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1920 937.334"
        />
      </span>
    </>
  )
}

Hero.propTypes = {
  isNav: PropTypes.bool.isRequired,
}

export default Hero
