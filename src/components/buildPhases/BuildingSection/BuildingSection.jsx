import React from 'react'
import classConcat from '../../../util/ClassConcat'
import SectionHeading from '../SectionHeading/SectionHeading'
import styles from './BuildingSection.module.css'
import bpStyles from '../buildPhases.module.css'
import TeamGraphics from './TeamGraphics/TeamGraphics'

const BuildingSection = () => (
  <section>
    <div className={classConcat('container', bpStyles.sectionContainer, styles.container)}>
      <SectionHeading>Build &amp; Testing</SectionHeading>
      <p>
        In this phase we build and test the app and make sure that it meets the design requirements.
      </p>
      <TeamGraphics />
    </div>
  </section>
)

export default BuildingSection
