/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import styles from './Footer.module.css'
import classConcat from '../../../util/ClassConcat'
import useQuantisedScroller from '../../../hooks/useQuantisedScroller'
import BookingEmbed from '../../BookingEmbed/BookingEmbed'
import FadeTransition, { FADE_DIRECTION } from '../../common/FadeTransition/FadeTransition'
import Arrow from './Arrow/Arrow'
import QUANTISED_SCROLLER_ACTIONS from '../../../redux/actions/QuantisedScroller'

const FooterQScroll = ({ groupIndex, hash }) => {
  // Refs
  const ref = React.createRef()
  // Constants
  const stepIds = ['what-opportunity-do-you-see']
  // Redux
  const { stepIndices, navId } = useSelector((state) => state.QuantisedScroller)
  const dispatch = useDispatch()
  // Hooks
  useQuantisedScroller(hash, groupIndex, stepIds, ref)
  // State
  const [hoverUp, setHoverUp] = React.useState(false)
  // Computations
  const navStep = stepIndices.get(navId) || { group: 0, index: 0 }
  const isNav = (navStep.group === groupIndex)
  // Events
  const handleArrowClick = () => {
    const navUp = QUANTISED_SCROLLER_ACTIONS.navUp()
    dispatch(navUp)
  }
  // Render
  return (
    <footer
      className={classConcat('container-fluid', styles.footer)}
      ref={ref}
    >
      <div
        className={classConcat(
          'row',
          'align-items-center',
          styles.text,
        )}
        onClick={handleArrowClick}
        onMouseEnter={() => setHoverUp(true)}
        onMouseLeave={() => setHoverUp(false)}
      >
        <div className="col-8">
          <p className={styles.paragraph}>
            To discuss next steps and details, please pick a time:
          </p>
        </div>
        <div className="col-4">
          <Arrow
            hover={hoverUp}
          />
        </div>
      </div>
      <FadeTransition
        tag="div"
        direction={FADE_DIRECTION.NONE}
        delay="0.15s"
        show={isNav}
        className={styles.bookingContainer}
      >
        <BookingEmbed />
      </FadeTransition>
    </footer>
  )
}

FooterQScroll.propTypes = {
  groupIndex: PropTypes.number.isRequired,
  hash: PropTypes.string.isRequired,
}

export default FooterQScroll
