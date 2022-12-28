/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'
import styles from './Footer.module.css'
import classConcat from '../../../util/ClassConcat'
import BookingEmbed from '../../BookingEmbed/BookingEmbed'
import FadeTransition, { FADE_DIRECTION } from '../../common/FadeTransition/FadeTransition'

const Footer = () => (
  <footer
    className={classConcat('container-fluid', styles.footer)}
  >
    <div
      className={classConcat(
        'row',
        'align-items-center',
        styles.text,
      )}
    >
      <div className="col-12">
        <p className={styles.paragraph}>
          Discuss more details of the app ... <br/>
          ... or financing options.<br/>
          Lets talk !
        </p>
      </div>
    </div>
    <FadeTransition
      tag="div"
      direction={FADE_DIRECTION.NONE}
      delay="0.15s"
      show
      className={styles.bookingContainer}
    >
      <BookingEmbed expand />
    </FadeTransition>
  </footer>
)

export default Footer
