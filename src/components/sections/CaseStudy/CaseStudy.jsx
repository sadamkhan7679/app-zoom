import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import classConcat from '../../../util/ClassConcat'
import CaseStudyImage from './Image/Image'
import CaseStudyText from './Text/Text'
import useBreakpoint, { BREAKPOINT } from '../../../hooks/useBreakpoint'
import styles from './CaseStudy.module.css'
// import useQuantisedScroller from '../../../hooks/useQuantisedScroller'
import slugify from '../../../util/Slugify'
import { FADE_DIRECTION } from '../../common/FadeTransition/FadeTransition'
import Header from './Header/Header'
import ScrollIndicator from '../../common/ScrollIndicator/ScrollIndicator'
import HeaderPlaceholder from '../../common/HeaderPlaceholder/HeaderPlaceholder'
import CtaButton from '../../common/CtaButton/CtaButton'

const CaseStudy = ({
  groupIndex,
  hash,
  imgUrl,
  heading,
  paragraphs,
  imgOrder,
  textOrder,
  textBias,
  withHeader,
}) => {
  // Refs
  const ref = React.createRef()
  // Constants
  const stepIds = groupIndex === 0
    ? [''] : [`${slugify(heading)}`]
  const caseStudyIndex = groupIndex
  // Redux
  const { stepIndices, navId } = useSelector((state) => state.QuantisedScroller)
  // Hooks
  const breakpoint = useBreakpoint()
  // useQuantisedScroller(hash, groupIndex, stepIds, ref)
  // Computations
  const isSmall = breakpoint <= BREAKPOINT.MD
  const navStep = stepIndices.get(navId) || { group: 0, index: 0 }
  const isNav = (navStep.group === groupIndex)
  const isFull = !withHeader
  // Render
  return (
    <section
      className={classConcat(
        'container-fluid',
        'p-0',
        styles.container,
        isFull ? styles.containerFull : null,
      )}
      ref={ref}
    >
      <HeaderPlaceholder half />
      { withHeader ? <Header /> : null }
      <div
        className={classConcat(
          'row',
          'no-gutters',
          (!isSmall) ? 'align-items-center' : null,
          styles.row,
          isFull ? styles.rowFull : null,
        )}
      >
        <div
          className={classConcat('col-lg-7', 'col-md-12')}
          // For smaller viewports, alternating order of image & text is ignored.
          // Order is always [img, text, img, text]
          style={{ order: isSmall ? null : imgOrder }}
        >
          <CaseStudyImage
            src={imgUrl}
            breakpoint={breakpoint}
            show={isNav}
            direction={imgOrder === 1 ? FADE_DIRECTION.LEFT : FADE_DIRECTION.RIGHT}
          />
        </div>
        <div
          className="col-lg-5 col-md-12 px-md-4"
          // For smaller viewports, alternating order of image & text is ignored.
          // Order is always [img, text, img, text]
          style={{ order: isSmall ? null : textOrder }}
        >
          <CaseStudyText
            heading={heading}
            paragraphs={paragraphs}
            breakpoint={breakpoint}
            bias={textBias}
            show={isNav}
          />
          <div className={styles.bookingBtnLandscape}>
            <CtaButton
              to="/contact-us"
              children= "Contact Us"
              show={isNav}
           />
          </div>
        </div>
      </div>
      <div className={styles.bookingBtnPortrait}>
        <CtaButton
          to="/contact-us"
          children= "Contact Us"
          show={isNav}
        />
      </div>
      {/* <ScrollIndicator
        count={4}
        navIndex={caseStudyIndex}
        show={isNav}
        light={caseStudyIndex % 2 === 0}
      /> */}
    </section>
  )
}

CaseStudy.propTypes = {
  groupIndex: PropTypes.number.isRequired,
  hash: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  paragraphs: PropTypes.arrayOf(PropTypes.node).isRequired,
  imgOrder: PropTypes.number.isRequired,
  textOrder: PropTypes.number.isRequired,
  textBias: PropTypes.number,
  withHeader: PropTypes.bool,
}

CaseStudy.defaultProps = {
  textBias: -1,
  withHeader: false,
}

export default CaseStudy
