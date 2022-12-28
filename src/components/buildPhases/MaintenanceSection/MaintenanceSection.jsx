import React from 'react'
import classConcat from '../../../util/ClassConcat'
import SectionHeading from '../SectionHeading/SectionHeading'
import AspectsGraphics from './AspectsGraphics/AspectsGraphics'
import styles from './MaintenanceSection.module.css'
import bpStyles from '../buildPhases.module.css'

const MaintenanceSection = () => (
  <section>
    <div className={classConcat('container', bpStyles.sectionContainer, styles.container)}>
      <SectionHeading>
        Hosting, Maintenance &amp; Upkeep
      </SectionHeading>
      <AspectsGraphics />
      <p>
        The costs of this phase depend on the software and the user load.
      </p>
    </div>
  </section>
)

export default MaintenanceSection
