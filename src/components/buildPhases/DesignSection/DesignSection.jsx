import React from 'react'
import SectionHeading from '../SectionHeading/SectionHeading'
import Documents from './Documents/Documents'
import bpStyles from '../buildPhases.module.css'
import styles from './DesignSection.module.css'
import classConcat from '../../../util/ClassConcat'
import UserGraphics from './UserGraphics/UserGraphics'
import Questions from './Questions/Questions'

const DesignSection = () => (
  <section>
    <div className={classConcat('container', bpStyles.sectionContainer, styles.container)}>
      <SectionHeading>Design &amp; Research</SectionHeading>
      <Documents />
      <p>
        The goal of this stage is to define the user experience.
      </p>
      <p>
        Research into competitor apps shows what is working.
      </p>
      <p>The different types of users are identified.</p>
      <UserGraphics />
      <p>
        The user experience for each type of user is nailed down.
      </p>
      <Questions />
      <p>
        Budget is typically not a major constraint.
      </p>
      <p>
        Apps can be built for anything ranging from over $100,000 to under $1,000.
      </p>
      <p>
        We work with budget constraints to make sure the customer wins.
      </p>
    </div>
  </section>
)

export default DesignSection
