import React from 'react'
import PropTypes from 'prop-types'
import styles from './FooterLinkGroup.module.css'
import FooterLink from './FooterLink/FooterLink'

const FooterLinkGroup = ({ links }) => (
  <ul className={styles.list}>
    {links.map(({
      to, text, onClick, target, rel,
    }) => (
      <FooterLink
        key={Math.random() * 1000 + "fot"}
        to={to}
        onClick={onClick}
        target={target}
        rel={rel}
      >
        {text}
      </FooterLink>
    ))}
  </ul>
)

FooterLinkGroup.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    to: PropTypes.string,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    target: PropTypes.string,
    rel: PropTypes.string,
  })).isRequired,
}

export default FooterLinkGroup
