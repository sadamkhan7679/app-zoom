import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styles from './Brand.module.css'
import logoPng from './img/logo.png'

const Brand = ({ showText, handleClick }) => (
  <Link
    to="/"
    className={styles.brand}
    onClick={handleClick}
  >
    <div className={styles.logo}>
      <img src={logoPng} alt="logo" className={styles.logoImg} />
    </div>
    {showText ? <h3 className={styles.text}>OPZOOM</h3> : null}
  </Link>
)

Brand.propTypes = {
  showText: PropTypes.bool,
  handleClick: PropTypes.func,
}

Brand.defaultProps = {
  showText: false,
  handleClick: null,
}

export default Brand
