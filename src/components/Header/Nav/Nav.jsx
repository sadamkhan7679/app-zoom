import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styles from './Nav.module.css'
import classConcat from '../../../util/ClassConcat'
import CtaButton from '../../common/CtaButton/CtaButton'

const Nav = ({ links, pageId, onLinkClick }) => (
  <nav className={styles.nav}>
    <ul className={styles.navList}>
      {
        links.map(({ to, text }) => (
          <li
            key={Math.random() * 1001 + 'nav'}
            className={styles.navItem}>
            <Link
              to={to}
              onClick={onLinkClick}
              className={classConcat(
                styles.link,
                (pageId === to) ? styles.linkNavigated : null,
              )}
            >
              {text}
            </Link>
          </li>
        ))
      }
      <li className={styles.navItem}>
        <CtaButton
          className={styles.bookingBtn}
          show
          showInitial
        />
      </li>
      <li className={styles.navItem}>
        <CtaButton
          className={styles.bookingBtn}
          to="/contact-us"
          children="Contact Us"
          show
          showInitial
        />
      </li>
    </ul>
  </nav>
)

Nav.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    to: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
  pageId: PropTypes.string.isRequired,
  onLinkClick: PropTypes.func.isRequired,
}

export default Nav
