import React from 'react'
import classConcat from '../../../../util/ClassConcat'
import styles from './UserGraphics.module.css'
//
import keySvg from './img/key.svg'
import userSvg from './img/user.svg'
import briefcaseSvg from './img/briefcase.svg'

const UserGraphics = () => (
  <div className={classConcat('container', styles.container)}>
    <h3>Examples Include:</h3>
    <div className={classConcat('row', styles.row)}>
      <div className={classConcat('col-md-4', styles.col)}>
        <img
          src={keySvg}
          alt=""
          className={styles.img}
        />
        <div className={styles.label}>
          Admin
        </div>
      </div>
      <div className={classConcat('col-md-4', styles.col)}>
        <img
          src={userSvg}
          alt=""
          className={styles.img}
        />
        <div className={styles.label}>
          Customers
        </div>
      </div>
      <div className={classConcat('col-md-4', styles.col)}>
        <img
          src={briefcaseSvg}
          alt=""
          className={styles.img}
        />
        <div className={styles.label}>
          Staff
        </div>
      </div>
    </div>
  </div>
)

export default UserGraphics
