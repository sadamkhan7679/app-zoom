import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styles from './LinkButton.module.css'
import classConcat from '../../../util/ClassConcat'

const LinkButton = ({
  children, to, className, onClick, disabled, disabledClass,
}) => (
  <Link
    className={classConcat(
      styles.button,
      className,
      disabled ? disabledClass : null,
    )}
    to={to}
    onClick={onClick}
  >
    {children}
  </Link>
)

LinkButton.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  disabledClass: PropTypes.string,
}

LinkButton.defaultProps = {
  className: null,
  onClick: () => {},
  disabled: false,
  disabledClass: styles.disabled,
}

export default LinkButton
