import React from 'react'
import PropTypes from 'prop-types'
import planning from './img/1-planning.svg'
import analysis from './img/2-analysis.svg'
import design from './img/3-design.svg'
import development from './img/4-development.svg'
import testing from './img/5-testing.svg'
import maintenance from './img/6-maintenance.svg'
import styles from './Cycle.module.css'
import classConcat from '../../../../util/ClassConcat'
import arrow from './img/arrow.svg'

const Cycle = ({ selectedIndex }) => {
  // Constants
  const steps = [
    planning,
    analysis,
    design,
    development,
    testing,
    maintenance,
  ]
  // Getters
  const isSelected = (index) => index === selectedIndex
  // Sub-Render
  const renderStep = (src, index) => (
    <img
      src={src}
      alt=""
      className={classConcat(
        styles.step,
        isSelected(index) ? styles.stepSelected : null,
      )}
      key={src}
    />
  )
  // Render
  return (
    <div className={styles.cycle}>
      <div className={styles.stepsContainer}>
        {steps.map(
          (step, index) => renderStep(step, index),
        )}
      </div>
      <div className={styles.text}>
        The
        <br />
        <strong className={styles.textStrong}>
          Software
          <br />
          Development
        </strong>
        <br />
        Cycle
      </div>
      <img
        src={arrow}
        alt=""
        className={styles.arrow}
        style={{
          transform: `scale(0.95) rotate(${selectedIndex * 60}deg)`,
        }}
      />
    </div>
  )
}

Cycle.propTypes = {
  selectedIndex: PropTypes.number.isRequired,
}

export default Cycle
