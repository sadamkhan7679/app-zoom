import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styles from './NavPanelLink.module.css'
import FadeTransition, { FADE_DIRECTION } from '../../../common/FadeTransition/FadeTransition'

const NavPanelLink = ({
  index, to, icon, children, show,
}) => (
  <Link to={to} className={styles.link}>
    <FadeTransition
      tag="div"
      delay={`${0.6 + index * 0.15}s`}
      direction={FADE_DIRECTION.NONE}
      show={show}
    >
      <div className={styles.navItem}>
        <img
          src={icon}
          alt=""
          className={styles.icon}
        />
        <span className={styles.text}>
          {children}
        </span>
      </div>
    </FadeTransition>
  </Link>
)

NavPanelLink.propTypes = {
  index: PropTypes.number.isRequired,
  to: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  show: PropTypes.bool.isRequired,
}

export default NavPanelLink
