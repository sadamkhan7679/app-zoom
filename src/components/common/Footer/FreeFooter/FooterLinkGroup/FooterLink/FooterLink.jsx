import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styles from './FooterLink.module.css'

const FooterLink = ({
  to, children, onClick, target, rel,
}) => {
  // Functions
  const getElementType = () => {
    if (to) return 'link'
    if (onClick) return 'button'
    return 'span'
  }
  // Computations
  const elementType = getElementType()
  // Render
  return (
    <li className={styles.item}>
      {
        {
          link: () => {
            if (to.includes("http")) {
              return (
                <a
                  href={to}
                  className={styles.link}
                  onClick={onClick}
                  target={target}
                  rel={rel}
                >
                  {children}
                </a>
              )
            } else {
              return (
                <Link
                  to={to}
                  className={styles.link}
                  onClick={onClick}
                  target={target}
                  rel={rel}
                >
                  {children}
                </Link>
              )
            }
          },
          button: () => (
            <button
              type="button"
              className={styles.button}
              onClick={onClick}
              rel={rel}
            >
              {children}
            </button>
          ),
          span: () => (
            <span className={styles.span}>{children}</span>
          ),
        }[elementType]()
      }
    </li>
  )
}

FooterLink.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  target: PropTypes.string,
  rel: PropTypes.string,
}

FooterLink.defaultProps = {
  to: null,
  onClick: null,
  target: null,
  rel: null,
}

export default FooterLink
