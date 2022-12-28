import React from 'react'
import PropTypes from 'prop-types'
import styles from './StoreLinks.module.css'
import classConcat from '../../../../util/ClassConcat'
import appStore from './img/app-store.png'
import googlePlay from './img/google-play.png'
import FadeTransition, { FADE_DIRECTION } from '../../../common/FadeTransition/FadeTransition'
import Downloads from './Downloads/Downloads'
import CtaButton from '../../../common/CtaButton/CtaButton'

const StoreLinks = ({
  show, navIndex, appleStoreUrl, playStoreUrl,
}) => {
  // Constants
  const maxDownloads = [
    100000,
    500000,
    500000,
    50000,
  ]
  // Computations
  const currentMaxDownloads = show ? maxDownloads[navIndex] : 0
  // Render
  return (
    <div className="container-fluid">
      <FadeTransition
        tag="div"
        direction={FADE_DIRECTION.NONE}
        delay="0.3s"
        show={show}
        className={classConcat('row', styles.buttonsRow)}
      >
        {
          appleStoreUrl ? (
            <div className="col my-sm-2">
              <a
                className={classConcat(
                  styles.storeLink,
                  styles.appStore,
                  (!playStoreUrl) ? styles.center : null,
                )}
                href={appleStoreUrl}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className={styles.storeLinkImg}
                  src={appStore}
                  alt=""
                />
              </a>
            </div>
          ) : null
        }
        {
          playStoreUrl ? (
            <div className="col my-sm-2">
              <a
                className={classConcat(
                  styles.storeLink,
                  styles.googlePlay,
                  (!appleStoreUrl) ? styles.center : null,
                )}
                href={playStoreUrl}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className={styles.storeLinkImg}
                  src={googlePlay}
                  alt=""
                />
              </a>
            </div>
          ) : null
        }
      </FadeTransition>
      <FadeTransition
        tag="div"
        direction={FADE_DIRECTION.BOTTOM}
        delay="0.4s"
        show={show}
        className="row"
      >
        <div className={classConcat(
          'col',
          styles.downloadsCol,
        )}
        >
          <Downloads
            show={show}
            navIndex={navIndex}
            max={currentMaxDownloads}
          />
        </div>
      </FadeTransition>
      <div className={styles.cta}>
        <CtaButton
            to="/contact-us"
            children= "Contact Us"
            show
        />
      </div>
    </div>
  )
}

StoreLinks.propTypes = {
  show: PropTypes.bool.isRequired,
  navIndex: PropTypes.number.isRequired,
  appleStoreUrl: PropTypes.string,
  playStoreUrl: PropTypes.string,
}

StoreLinks.defaultProps = {
  appleStoreUrl: null,
  playStoreUrl: null,
}

export default StoreLinks
