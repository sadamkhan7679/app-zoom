import React from 'react'
import PropTypes from 'prop-types'
import stylePropType from 'react-style-proptype'
import classConcat from '../../../util/ClassConcat'

export const FADE_DIRECTION = {
  BOTTOM: 'BOTTOM',
  LEFT: 'LEFT',
  RIGHT: 'RIGHT',
  TOP: 'TOP',
  NONE: 'NONE',
}

const FadeTransition = ({
  tag,
  children,
  direction,
  delay,
  release,
  show,
  showInitial,
  className,
  style,
  ...others
}) => {
  // Validate
  // - Ensure direction given is a recognised direction.
  const directionKeys = Object.keys(FADE_DIRECTION)
  let directionIsMember = false
  directionKeys.forEach((key) => {
    const val = FADE_DIRECTION[key]
    if (direction === val) directionIsMember = true
  })
  if (directionIsMember === false) {
    throw new Error(
      `Unrecognised direction '${direction}'.`,
    )
  }
  // State
  const [showing, setShowing] = React.useState(showInitial)
  // Effects
  React.useEffect(() => {
    if (show !== showing) setShowing(show)
  })
  // Getters
  const getFadeClass = () => {
    if (direction === FADE_DIRECTION.NONE) return null
    const suffix = direction.toLowerCase()
    return `fade-${suffix}`
  }
  // Computations
  const compositeClassName = classConcat(
    className,
    'fade',
    getFadeClass(),
    showing ? 'fade--show' : null,
  )
  const compositeStyle = {
    ...style,
    transitionDelay: show ? delay : release,
  }
  // Render
  return React.createElement(
    tag,
    {
      className: compositeClassName,
      style: compositeStyle,
      ...others,
    },
    children,
  )
}

FadeTransition.defaultProps = {
  children: null,
  tag: 'p',
  direction: FADE_DIRECTION.BOTTOM,
  delay: '0.5s',
  release: '0.15s',
  show: false,
  showInitial: false,
  className: null,
  style: {},
}

FadeTransition.propTypes = {
  children: PropTypes.node,
  tag: PropTypes.string,
  direction: PropTypes.string,
  delay: PropTypes.string,
  release: PropTypes.string,
  show: PropTypes.bool,
  showInitial: PropTypes.bool,
  className: PropTypes.string,
  style: stylePropType,
}

export default FadeTransition
