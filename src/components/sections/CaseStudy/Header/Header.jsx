import React from 'react'
import styles from './Header.module.css'
import classConcat from '../../../../util/ClassConcat'

const Header = () => (
  <header className="row">
    <div className="col">
      <div className={styles.textContainer}>
        <div className={styles.text}>
          <h1 className={classConcat('section__h1', styles.heading)}>
            Case Study
          </h1>
          <span className={classConcat('section__subheading', styles.subtitle)}>
            How To Build A Useful App?
          </span>
        </div>
      </div>
    </div>
  </header>
)

export default Header
