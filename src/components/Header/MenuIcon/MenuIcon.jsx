import React from 'react'
import PropTypes from 'prop-types'
import menuIcon from './menu-icon.svg'
import styles from './MenuIcon.module.css'

const MenuIcon = ({ onToggle }) => (
  <button
    type="button"
    className={styles.menuIcon}
    onClick={onToggle}
  >
    <img
      className="MobileNav"
      src={menuIcon}
      alt="menuIcon"
    />
  </button>
)

MenuIcon.propTypes = {
  onToggle: PropTypes.func.isRequired,
}

export default MenuIcon
