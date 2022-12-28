import React from 'react'
import PropTypes from 'prop-types'
import styles from './HeaderPlaceholder.module.css'
import classConcat from '../../../util/ClassConcat'

const HeaderPlaceholder = ({ half }) => (
  <div className={classConcat(
    styles.root,
    half ? styles.half : null,
  )}
  />
)

HeaderPlaceholder.propTypes = {
  half: PropTypes.bool,
}

export default HeaderPlaceholder
