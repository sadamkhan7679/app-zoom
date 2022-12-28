import React from 'react'
import image1 from './img/image1.png'
import image2 from './img/image2.png'
import image3 from './img/image3.png'
import image4 from './img/image4.png'
import image5 from './img/image5.png'
import image6 from './img/image6.png'
import styles from './GlobalReach.module.css'
import FadeTransition, { FADE_DIRECTION } from '../../common/FadeTransition/FadeTransition'
import classConcat from '../../../util/ClassConcat'
import useBreakpoint, { BREAKPOINT } from '../../../hooks/useBreakpoint'
import useOrientation, { ORIENTATION } from '../../../hooks/useOrientation'
import useIsInView from '../../../hooks/useIsInView'

const GlobalReach = () => {
  // Refs
  const ref = React.createRef()
  const imgRef = React.createRef()
  // Hooks
  const orientation = useOrientation()
  const breakpoint = useBreakpoint()
  const imgIsInView = useIsInView(imgRef, { x: 0, y: 80 })
  const isInView = useIsInView(ref)
  // Computations
  // const isVerySmall = breakpoint < BREAKPOINT.MD
  const isSmall = breakpoint < BREAKPOINT.SM
  // Render
  return (
    <section
      className={classConcat(
        'container-fluid',
        'px-md-5',
        styles.container,
      )}
      ref={ref}
    >
      <div
        className={classConcat(
          'row',
          orientation === ORIENTATION.PORTRAIT ? null : 'align-items-center',
          styles.row,
        )}
      >
        <div className={classConcat(
          orientation === ORIENTATION.LANDSCAPE
            ? 'col-6' : 'col-12',
          styles.textCol,
        )}
        >
          <div className={styles.textContainer}>
            <FadeTransition
              tag="h1"
              delay="0.2s"
              show={isInView}
              className={styles.heading}
            >
              Global Reach
            </FadeTransition>
            <FadeTransition
              tag="h5"
              delay="0.3s"
              show={isInView}
              className={styles.subheading}
            >
              Online &amp; digital businesses are amazing.
            </FadeTransition>
            <ul className={styles.list}>
              <FadeTransition
                tag="li"
                delay="0.8s"
                show={isInView}
                className={styles.listItem}
              >
                Offer a better user experience
              </FadeTransition>
              <FadeTransition
                tag="li"
                delay="0.9s"
                show={isInView}
                className={styles.listItem}
              >
                Have high growth
              </FadeTransition>
              <FadeTransition
                tag="li"
                delay="1.0s"
                show={isInView}
                className={styles.listItem}
              >
                Are very scalable
              </FadeTransition>
              <FadeTransition
                tag="li"
                delay="1.1s"
                show={isInView}
                className={styles.listItem}
              >
                Have global reach
              </FadeTransition>
            </ul>
            <FadeTransition
              tag="h5"
              delay="0.4s"
              show={isInView}
              className={styles.subheading}
            >
              We help people companies reach a mass audience.
            </FadeTransition>
          </div>
        </div>
        <div className="col-sm-6">
          <div
            ref={imgRef}
            style={{
              display: 'inline-block',
              width: '12pt',
              height: '12pt',
            }}
          />
        </div>
      </div>
      <div
        className={classConcat(
          isSmall ? null : 'px-5',
          styles.imageContainer,
        )}
      >
        <FadeTransition
          tag="div"
          direction={FADE_DIRECTION.NONE}
          delay="0.15s"
          show={imgIsInView}
          className="row"
        >
          <div className="col-4">
            <img src={image1} alt="vector" className={styles.image} />
          </div>
          <div className="col-4">
            <img src={image2} alt="vector" className={styles.image} />
          </div>
          <div className="col-4">
            <img src={image3} alt="vector" className={styles.image} />
          </div>
          <div className="col-4">
            <img src={image4} alt="vector" className={styles.image} />
          </div>
          <div className="col-4">
            <img src={image5} alt="vector" className={styles.image} />
          </div>
          <div className="col-4">
            <img src={image6} alt="vector" className={styles.image} />
          </div>
        </FadeTransition>
      </div>
      <div className={styles.topGradient} />
      <div className={styles.bottomGradient} />
    </section>
  )
}

export default GlobalReach
