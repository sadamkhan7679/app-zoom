import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import styles from './styles.module.css'

const QuestionText = ({ index, heading, children }) => (
  <div
    className={clsx(
      'container',
      styles.container,
    )}
  >
    <h2 className="section__h2">
      {index}
      .
      {'  '}
      {heading}
    </h2>
    <div>
      {children}
    </div>
  </div>
)

QuestionText.propTypes = {
  heading: PropTypes.string,
  children: PropTypes.node,
}

export default QuestionText
