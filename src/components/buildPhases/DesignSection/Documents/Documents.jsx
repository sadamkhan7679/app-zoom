import React from 'react'
import classConcat from '../../../../util/ClassConcat'
import styles from './Documents.module.css'
import richtextSvg from './img/richtext.svg'
import wordSvg from './img/word.svg'

const Documents = () => (
  <div className={classConcat('container', styles.container)}>
    <h3>Outputs from the design phase are:</h3>
    <div className={classConcat('row', styles.row)}>
      <div className={classConcat('col-md-6', styles.col)}>
        <a href="/#" className={styles.a}>
          <img
            src={richtextSvg}
            alt=""
            className={styles.img}
          />
          <div className={styles.label}>
            Design Drawings [PDF]
          </div>
        </a>
      </div>
      <div className={classConcat('col-md-6', styles.col)}>
        <a href="/#" className={styles.a}>
          <img
            src={wordSvg}
            alt=""
            className={styles.img}
          />
          <div className={styles.label}>
            Interactions Information [DOC]
          </div>
        </a>
      </div>
    </div>
  </div>
)

export default Documents
