import React from 'react'
import classConcat from '../../../../util/ClassConcat'
import useBreakpoint, { BREAKPOINT } from '../../../../hooks/useBreakpoint'
import styles from './Questions.module.css'
//
import infoSvg from './img/info.svg'
import connectSvg from './img/connect.svg'

const Questions = () => {
  // Hooks
  const breakpoint = useBreakpoint()
  // Computations
  const isSmall = breakpoint <= BREAKPOINT.MD
  // Render
  return (
    <div className={classConcat('container', styles.container)}>
      <h3>Specific questions include:</h3>
      <div className={classConcat('row', 'align-items-center', styles.row)}>
        <div
          style={{ order: isSmall ? 1 : 0 }}
          className={classConcat(
            'col-md-9',
            styles.col,
            isSmall ? null : styles.right,
          )}
        >
          <p className={styles.question}>
            What information needs to be displayed?
          </p>
        </div>
        <div
          style={{ order: isSmall ? 0 : 1 }}
          className={classConcat(
            'col-md-3',
            styles.col,
            isSmall ? null : styles.left,
          )}
        >
          <img
            src={infoSvg}
            alt=""
            className={styles.img}
          />
        </div>
      </div>
      <div className={classConcat('row', 'align-items-center', styles.row)}>
        <div
          className={classConcat(
            'col-md-3',
            styles.col,
            isSmall ? null : styles.right,
          )}
        >
          <img
            src={connectSvg}
            alt=""
            className={styles.img}
          />
        </div>
        <div
          className={classConcat(
            'col-md-9',
            styles.col,
            isSmall ? null : styles.left,
          )}
        >
          <p className={styles.question}>Where will the information get into the app from?</p>
        </div>
      </div>
    </div>
  )
}

export default Questions
