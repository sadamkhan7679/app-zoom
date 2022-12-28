import React from 'react'
import classConcat from '../../../../util/ClassConcat'
import styles from './TeamGraphics.module.css'
//
import pencilSvg from './img/pencil.svg'
import cubeSvg from './img/cube.svg'
import monitorSvg from './img/monitor.svg'
import serverSvg from './img/server.svg'
import badgeSvg from './img/badge.svg'
import useBreakpoint, { BREAKPOINT } from '../../../../hooks/useBreakpoint'

const TeamGraphics = () => {
  // Hooks
  const breakpoint = useBreakpoint()
  // Computations
  const isSmall = breakpoint < BREAKPOINT.MD
  // Render
  return (
    <div className={classConcat('container', styles.container)}>
      <h3 className={styles.heading}>
        This requires teamwork and collaboration between:
      </h3>
      <div className={classConcat('row', styles.row)}>
        <div className={classConcat('col-md-2', styles.col, isSmall ? styles.left : styles.right)}>
          <img
            src={pencilSvg}
            alt=""
            className={styles.img}
          />
        </div>
        <div className={classConcat('col-md-10', styles.col)}>
          <p className={styles.teamDescription}>
            <strong className={styles.rowHeading}>App Designer&nbsp;&nbsp;</strong>
            who talks with the clients to ensure that the app is built to requirements.
          </p>
        </div>
      </div>
      <div className={classConcat('row', styles.row)}>
        <div className={classConcat('col-md-2', styles.col, isSmall ? styles.left : styles.right)}>
          <img
            src={cubeSvg}
            alt=""
            className={styles.img}
          />
        </div>
        <div className={classConcat('col-md-10', styles.col)}>
          <p className={styles.teamDescription}>
            <strong className={styles.rowHeading}>Systems Architect&nbsp;&nbsp;</strong>
            who designs computer systems at a high level to ensure that the pieces will work well
            when put together meeting the expectations set in the design phase.
          </p>
        </div>
      </div>
      <div className={classConcat('row', styles.row)}>
        <div className={classConcat('col-md-2', styles.col, isSmall ? styles.left : styles.right)}>
          <img
            src={monitorSvg}
            alt=""
            className={styles.img}
          />
        </div>
        <div className={classConcat('col-md-10', styles.col)}>
          <p className={styles.teamDescription}>
            <strong className={styles.rowHeading}>Front End Engineer&nbsp;&nbsp;</strong>
            who writes code that works on the front end.
          </p>
        </div>
      </div>
      <div className={classConcat('row', styles.row)}>
        <div className={classConcat('col-md-2', styles.col, isSmall ? styles.left : styles.right)}>
          <img
            src={serverSvg}
            alt=""
            className={styles.img}
          />
        </div>
        <div className={classConcat('col-md-10', styles.col)}>
          <p className={styles.teamDescription}>
            <strong className={styles.rowHeading}>Back End Engineer&nbsp;&nbsp;</strong>
            who writes code for the server.
          </p>
        </div>
      </div>
      <div className={classConcat('row', styles.row)}>
        <div className={classConcat('col-md-2', styles.col, isSmall ? styles.left : styles.right)}>
          <img
            src={badgeSvg}
            alt=""
            className={styles.img}
          />
        </div>
        <div className={classConcat('col-md-10', styles.col)}>
          <p className={styles.teamDescription}>
            <strong className={styles.rowHeading}>Quality Assurance Analyst&nbsp;&nbsp;</strong>
            who is responsible to ensure that the design goals are met by the team.
          </p>
        </div>
      </div>
    </div>
  )
}

export default TeamGraphics
