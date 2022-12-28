import React from 'react'
import PhasePoint from './PhasePoint/PhasePoint'
import styles from './PhasesSection.module.css'
import pencilSvg from './img/pencil.svg'
import hammerSvg from './img/hammer.svg'
import repeatSvg from './img/repeat.svg'
import classConcat from '../../../util/ClassConcat'
import bpStyles from '../buildPhases.module.css'
import { Link } from 'gatsby'
import clsx from "clsx";

const PhasesSection = () => (
  <section>
    <div className={classConcat(
      'container',
      bpStyles.sectionContainer,
      styles.container,
    )}
    >
      <h2 className={styles.h2}>Typically app building is split into 3 phases:</h2>
      <div className={classConcat('row', 'align-items-center', styles.row)}>
        <div className={classConcat('col-md-6', styles.col)}>
          <PhasePoint
            src={pencilSvg}
            heading="Research &amp; Design"
          >
            We agree on what the app should look
            like and possible limits to budget.
          </PhasePoint>
        </div>
        <div className={classConcat('col-md-6', styles.col)}>
          <PhasePoint
            src={hammerSvg}
            heading="Build &amp; Testing"
          >
            The app is built and tested to meet the above design specs.
          </PhasePoint>
        </div>
      </div>
      <div className={classConcat('row', styles.row)}>
        <div className={classConcat('col-md-3', styles.spacer)} />
        <div className={classConcat('col-md-6', styles.col)}>
          <PhasePoint
            src={repeatSvg}
            heading="Hosting, Maintenance &amp; Modifications"
          >
            The app is put on the app/play store and ready for users.
            We also keep making upgrades.
          </PhasePoint>

          <Link
            to={'/build-process#'}
            replace={false}
          >
            <button
              type="button"
              className={clsx(styles.button)}
            >
              Build Cycle
           </button>
          </Link>
        </div>

        {/* <div className={clsx("container-fluid", "py-2", styles.container)}> */}

        {/* </div> */}

        <div className={classConcat('col-md-3', styles.spacer)} />
      </div>
    </div>
  </section>
)

export default PhasesSection
