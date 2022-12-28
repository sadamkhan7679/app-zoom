import React from 'react'
import PropTypes from 'prop-types'
import styles from './ScrollIndicator.module.css'
import classConcat from '../../../util/ClassConcat'
import useOrientation, { ORIENTATION } from '../../../hooks/useOrientation'

const ScrollIndicator = ({
  count, navIndex, show, right, light,
}) => {
  // Hooks
  const orientation = useOrientation()
  // Pure Functions
  const getIndexHeight = () => (
    orientation === ORIENTATION.PORTRAIT
      ? '12pt' : `${50 / count}vh`
  )
  const renderIndices = (index = 0) => {
    if (index === count) return []
    return [
      (
        <div
          key={index}
          className={classConcat(
            styles.index,
            index === navIndex ? styles.navIndex : null,
          )}
          style={{
            height: getIndexHeight(),
          }}
        />
      ),
      ...renderIndices(index + 1),
    ]
  }
  // Render
  return (
    <div
      className={classConcat(
        styles.container,
        show ? styles.show : null,
        right ? styles.right : null,
        light ? styles.light : null,
      )}
    >
      {renderIndices()}
    </div>
  )
}

ScrollIndicator.propTypes = {
  count: PropTypes.number.isRequired,
  navIndex: PropTypes.number.isRequired,
  show: PropTypes.bool,
  right: PropTypes.bool,
  light: PropTypes.bool,
}

ScrollIndicator.defaultProps = {
  show: true,
  right: false,
  light: false,
}

export default ScrollIndicator
