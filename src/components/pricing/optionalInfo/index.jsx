import React from 'react'
import OPTIONAL_INFO from '../../../constants/pricing/optionalInfo'
import classConcat from '../../../util/ClassConcat'
import styles from './styles.module.css'
import OptionalInfoOption from './optionalInfoOption'

const OptionalInfo = () => (
  <div className={classConcat('container', styles.container)}>
    <div className="row px-3">
      <div className="col-12">
        <div className={styles.block}>
          <p className="section__p">
            Optional additional information available,
            please select any information you&apos;d like to receive:
          </p>
        </div>
      </div>
    </div>
    <div className="row px-3">
      <div className="col-12">
        <div className={styles.block}>
          <OptionalInfoOption optionId={OPTIONAL_INFO.ADD_FEATURES}>
            Discuss details and requirements for the app
          </OptionalInfoOption>
          <OptionalInfoOption optionId={OPTIONAL_INFO.MARKETING}>
            Case studies of successful app development &amp; marketing strategy
          </OptionalInfoOption>
          <OptionalInfoOption optionId={OPTIONAL_INFO.FUNDING}>
            Grants &amp; funding available to startups
          </OptionalInfoOption>
        </div>
      </div>
    </div>
  </div>
)

export default OptionalInfo
