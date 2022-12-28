import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import styles from './styles.module.css'
import closeSvg from './img/close.svg'

const QuestionOptionInfo = ({
  isOpen, iconSrc, heading, children, onClose,
}) => (
  <div
    className={clsx(
      styles.modal,
      isOpen ? null : styles.closed,
    )}
  >
    <button
      type="button"
      className={styles.backdrop}
      onClick={onClose}
    >
      <span className={styles.backdropLabel}>Close Question Option Info Modal.</span>
    </button>
    <div className={clsx('container')}>
      <div className={styles.box}>
        <div className="row align-items-center">
          <div className="col-3">
            <img
              src={iconSrc}
              alt=""
              className={styles.icon}
            />
          </div>
          <div className="col-6">
            <h2>{heading}</h2>
          </div>
          <div className="col-3">
            <button
              type="button"
              className={styles.closeBtn}
              onClick={onClose}
            >
              <img
                src={closeSvg}
                alt="Close icon."
                className={styles.closeIcon}
              />
            </button>
          </div>
        </div>
        <div className={styles.body}>
          <p>
            {children}
          </p>
        </div>
      </div>
    </div>
  </div>
)

QuestionOptionInfo.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  heading: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default QuestionOptionInfo
