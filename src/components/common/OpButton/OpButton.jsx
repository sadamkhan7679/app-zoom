import React from 'react'
import PropTypes from 'prop-types'
import styles from './OpButton.module.css'
import classConcat from '../../../util/ClassConcat'

const OpButton = ({
  children, onClick, className, disabled, disabledClass,
}) => (
  <button
    type="button"
    className={classConcat(
      styles.button,
      className,
      disabled ? disabledClass : null,
    )}
    onClick={onClick}
  >
    {children}
  </button>
)

OpButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  disabledClass: PropTypes.string,
}

OpButton.defaultProps = {
  className: null,
  disabled: false,
  disabledClass: styles.disabled,
}

export default OpButton
