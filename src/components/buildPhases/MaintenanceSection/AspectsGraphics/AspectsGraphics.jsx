import React from 'react'
import classConcat from '../../../../util/ClassConcat'
import styles from './AspectsGraphics.module.css'
//
import shopSvg from './img/shop.svg'
import repeatSvg from './img/repeat.svg'
import databaseSvg from './img/database.svg'

const AspectsGraphics = () => (
  <div className={classConcat('container', styles.container)}>
    <h3>In this phase:</h3>
    <div className={classConcat('row', styles.row)}>
      <div className="col-md-3" />
      <div className={classConcat('col-md-6', styles.col)}>
        <div className={styles.aspectContainer}>
          <img
            src={shopSvg}
            alt=""
            className={styles.img}
          />
          <p className={styles.aspectText}>
            The app is published into the app stores for
            google and apple based on design requirements.
          </p>
        </div>
      </div>
      <div className="col-md-3" />
    </div>
    <div className={classConcat('row', styles.row)}>
      <div className={classConcat('col-md-6', styles.col)}>
        <div className={styles.aspectContainer}>
          <img
            src={repeatSvg}
            alt=""
            className={styles.img}
          />
          <p className={styles.aspectText}>
            Users frequently do things that were not predicted in the design stage.
            We make modifications to keep the app stable.
          </p>
        </div>
      </div>
      <div className={classConcat('col-md-6', styles.col)}>
        <div className={styles.aspectContainer}>
          <img
            src={databaseSvg}
            alt=""
            className={styles.img}
          />
          <p className={styles.aspectText}>
            We frequently backup user data so we can bring it all
            back up if a database is corrupted or hacked.
          </p>
        </div>
      </div>
    </div>
  </div>
)

export default AspectsGraphics
