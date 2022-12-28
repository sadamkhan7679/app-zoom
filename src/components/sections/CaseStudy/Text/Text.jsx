import React from 'react'
import PropTypes from 'prop-types'
import styles from './Text.module.css'
import classConcat from '../../../../util/ClassConcat'
import { BREAKPOINT } from '../../../../hooks/useBreakpoint'
import FadeTransition from '../../../common/FadeTransition/FadeTransition'

const CaseStudyText = ({
  heading, paragraphs, breakpoint, bias, show,
}) => {
  // Computations
  const isSmall = breakpoint <= BREAKPOINT.MD
  // Render
  return (
    <div
      className={
      classConcat(
        styles.container,
        isSmall ? styles.containerSmallVp : null,
      )
    }
    >
      <div className={classConcat(
        'row', 'align-items-center', styles.row,
      )}
      >
        <div
          className={classConcat(
            isSmall ? `col-${6 + bias}` : 'col-12',
            isSmall ? 'px-2' : null,
          )}
        >
          <FadeTransition
            tag="h1"
            delay="0.4s"
            show={show}
            className={styles.heading}
          >
            {heading}
          </FadeTransition>
        </div>
        <div
          className={classConcat(
            isSmall ? `col-${6 - bias}` : 'col-12',
            isSmall ? 'px-2' : null,
          )}
        >
          <div
            className={
            isSmall ? styles.paragraphsSmallVp : null
          }
          >
            {
              paragraphs.map(
                (paragraph, index) => (
                  <FadeTransition
                    delay={`${0.55 + 0.04 * index}s`}
                    show={show}
                    className={styles.paragraph}
                    // eslint-disable-next-line react/no-array-index-key
                    key={index}
                  >
                    {paragraph}
                  </FadeTransition>
                ),
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

CaseStudyText.propTypes = {
  heading: PropTypes.string.isRequired,
  paragraphs: PropTypes.arrayOf(PropTypes.node).isRequired,
  breakpoint: PropTypes.number.isRequired,
  bias: PropTypes.number,
  show: PropTypes.bool.isRequired,
}

CaseStudyText.defaultProps = {
  bias: -1,
}

export default CaseStudyText
