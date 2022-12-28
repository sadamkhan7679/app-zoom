import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import classConcat from '../../../../util/ClassConcat'
import PRICING_ACTIONS from '../../../../redux/actions/Pricing'
import calcTotalEstimate, { ESTIMATE_MAX } from '../../../../functions/pricing/calcEstimate'
import FadeTransition, { FADE_DIRECTION } from '../../../common/FadeTransition/FadeTransition'
import styles from './styles.module.css'
import currencyFormatter from "currency-formatter";

const EstimateBar = () => {
  // Hooks
  const { answers } = useSelector((state) => state.Pricing)
  const dispatch = useDispatch();

  const [estimate, setEstimate] = React.useState(0)

  // State
  const [progressWidth, setProgressWidth] = React.useState(0)
  // // Computations
  // const estimate = calcTotalEstimate(answers)
  // // Functions
  const getValue = () => {
    if (estimate < ESTIMATE_MAX * (1 / 3)) return '$'
    if (estimate < ESTIMATE_MAX * (2 / 3)) return '$$'
    return '$$$'
  }
  // Effects
  // - Set Progress Width

  React.useEffect(() => {
    setEstimate(calcTotalEstimate(answers));
    const action = PRICING_ACTIONS.setEstimate(currencyFormatter.format(calcTotalEstimate(answers), { code: "USD" }));
    dispatch(action);
  }, [])
  React.useEffect(() => {
    // setEstimate(calcTotalEstimate(answers))
    setProgressWidth(100 * (estimate / ESTIMATE_MAX))
  }, [answers, estimate])
  // Render
  return (
    <div className={classConcat(
      'container',
      styles.container,
    )}
    >
      <div className="row align-items-center">
        {/* <div className={classConcat('col-12 px-0')}
        >
          <span className={styles.heading}>
            Your estimate so far: {currencyFormatter.format(estimate, { code: "USD" })}
          </span>
        </div> */}
        <div className={classConcat('col-12 ')}>
          <div className={styles.bar}>
            <div
              className={styles.progress}
              style={{
                width: `${progressWidth}%`,
              }}
            >
              <FadeTransition
                tag="span"
                delay="0.15s"
                direction={FADE_DIRECTION.NONE}
                show
              >
                <span className={styles.value}>
                  {getValue()}
                </span>
              </FadeTransition>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EstimateBar
