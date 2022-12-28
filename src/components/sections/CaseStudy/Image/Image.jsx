import React from 'react'
import PropTypes from 'prop-types'
import styles from './Image.module.css'
import classConcat from '../../../../util/ClassConcat'
import { BREAKPOINT } from '../../../../hooks/useBreakpoint'
import FadeTransition from '../../../common/FadeTransition/FadeTransition'

const CaseStudyImage = ({
  src, breakpoint, show, direction,
}) => (
  <FadeTransition
    tag="div"
    direction={direction}
    delay="0.1s"
    release="1.0s"
    show={show}
    className={
      classConcat(
        styles.img,
        (breakpoint <= BREAKPOINT.MD)
          ? styles.imgSmallVp : null,
      )
    }
    style={{
      backgroundImage: `url(${src})`,
    }}
  />
)

CaseStudyImage.propTypes = {
  src: PropTypes.string.isRequired,
  breakpoint: PropTypes.number.isRequired,
  show: PropTypes.bool.isRequired,
  direction: PropTypes.string.isRequired,
}

export default CaseStudyImage
