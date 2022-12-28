/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react'
import styles from './VideoSection.module.css'
import classConcat from '../../../util/ClassConcat'
import bpStyles from '../buildPhases.module.css'
import CtaButton from '../../common/CtaButton/CtaButton'

const VideoSection = () => (
  <section>
    <div className={classConcat(
      'container',
      bpStyles.sectionContainer,
      styles.container,
    )}
    >
      <video className={styles.video} controls>
        <source
            src="https://media.opzoom.com/app.opzoom.com/pricing.mp4"
          type="video/mp4"
        />
      </video>
      <center>
          <CtaButton
            to="/contact-us"
            children= "Contact Us"
            show
          />
        </center>
    </div>
  </section>
)

VideoSection.propTypes = {

}

export default VideoSection
