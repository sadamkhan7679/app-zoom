import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import classConcat from '../../../util/ClassConcat'
import Cycle from './Cycle/Cycle'
import StepText from './StepText/StepText'
import styles from './GreatApps.module.css'
import bg1 from './img/bg1.svg'
import useQuantisedScroller from '../../../hooks/useQuantisedScroller'
import FadeTransition, { FADE_DIRECTION } from '../../common/FadeTransition/FadeTransition'
import useBreakpoint, { BREAKPOINT } from '../../../hooks/useBreakpoint'
import CtaButton from '../../common/CtaButton/CtaButton'
import useOrientation, { ORIENTATION } from '../../../hooks/useOrientation'
import ScrollIndicator from '../../common/ScrollIndicator/ScrollIndicator'
import HeaderPlaceholder from '../../common/HeaderPlaceholder/HeaderPlaceholder'

const GreatApps = ({ groupIndex, hash }) => {
  // Ref
  const ref = React.createRef()
  // Constants
  const stepIds = [
    '',
    'analysis',
    'design',
    'development',
    'testing-and-integration',
    'maintenance',
  ]
  // Redux
  const { stepIndices, navId } = useSelector((state) => state.QuantisedScroller)
  // Hooks
  const orientation = useOrientation()
  const breakpoint = useBreakpoint()
  useQuantisedScroller(hash, groupIndex, stepIds, ref)
  // Computations
  const isSmall = breakpoint < BREAKPOINT.MD
  const navStep = stepIndices.get(navId) || { group: 0, index: 0 }
  const navIndex = (navStep.group === groupIndex) ? navStep.index : -1
  const isNav = (navStep.group === groupIndex)
  // Render
  return (
    <section className={styles.container} ref={ref}>
      <HeaderPlaceholder />
      <div className={classConcat('container', styles.text)}>
        <FadeTransition
          tag="h1"
          direction={FADE_DIRECTION.NONE}
          delay="0.4s"
          show={isNav}
          className={classConcat('section__h1', styles.heading)}
        >
          Great Apps Built Fast
        </FadeTransition>
        <FadeTransition
          direction={FADE_DIRECTION.NONE}
          delay="0.6s"
          show={isNav}
          className={classConcat('section__p', styles.paragraph)}
          style={{
            textAlign: isSmall ? 'center' : null,
          }}
        >
          To build an app that fits the market, we build and test often.
        </FadeTransition>
        {
          isSmall ? null : (
            <FadeTransition
              direction={FADE_DIRECTION.NONE}
              delay="0.66s"
              show={isNav}
              className={classConcat('section__p', styles.paragraph)}
            >
              To build fast with minimum investment we found that it’s best
              to repeat this loop fast and often:
            </FadeTransition>
          )
        }
      </div>
      <div className={classConcat('container-fluid', styles.steps)}>
        <div className="row align-items-center">
          <div
            className={classConcat(
              orientation === ORIENTATION.LANDSCAPE
                ? 'col-6' : 'col-12',
              styles.cycleCol,
            )}
          >
            <img
              src={bg1}
              alt=""
              className={styles.bg1}
            />
            <Cycle selectedIndex={navIndex} />
          </div>
          <div
            className={classConcat(
              orientation === ORIENTATION.LANDSCAPE
                ? 'col-6' : 'col-12',
              styles.stepTextCol,
            )}
          >
            <div className={styles.stepTextContainer}>
              <StepText heading="Planning" show={navIndex === 0}>
                Find the means and ways for the new system to meet business
                strategic objectives, resource availability, cost-related
                issues, timeframes and determining solutions.
              </StepText>
              <StepText heading="Analysis" show={navIndex === 1}>
                Feasibility analysis displays all the technical
                and economical aspects impacting the application
                development process: time, resources, tasks and
                involvement estimates from the team members help
                calculate ROI and determine project cost and profit.
              </StepText>
              <StepText heading="Design" show={navIndex === 2}>
                This is a kind of visual modelling of everything. This includes
                functionality, fundamental hardware/software components,
                software tools for future development, structure capabilities and key
                processes to realize the business needs and objectives of
                the proposed solution.
              </StepText>
              <StepText heading="Development" show={navIndex === 3}>
                The software engineering team has to make sure their
                code meets the software specifications and conforms to stakeholders’ requirements.
                If previous stages of development were carefully
                fulfilled, the ready-to-use software is certain to succeed
                in matching these requirements.
              </StepText>
              <StepText heading="Testing &amp; Integration" show={navIndex === 4}>
                The Quality Assurance team conducts a series of tests including
                functionality testing, systems integration, and interoperability
                as well as user acceptance testing, etc.
              </StepText>
              <StepText heading="Operation" show={navIndex === 5}>
                The phase is treated with the utmost attention since during
                the stage the product is polished, upgraded, enhanced and
                fine-tuned according to the real-world feedback on its
                performance.
              </StepText>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bookingBtnContainer}>
        <CtaButton
          to="/contact-us"
          children= "Contact Us"
          show={isNav}
        />
      </div>
      <ScrollIndicator
        count={6}
        navIndex={navIndex}
        show={isNav}
      />
    </section>
  )
}

GreatApps.propTypes = {
  groupIndex: PropTypes.number.isRequired,
  hash: PropTypes.string.isRequired,
}

export default GreatApps
