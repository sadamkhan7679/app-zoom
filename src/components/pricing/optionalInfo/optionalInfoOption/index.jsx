import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import classConcat from '../../../../util/ClassConcat'
import styles from './styles.module.css'
import PRICING_ACTIONS from '../../../../redux/actions/Pricing'

const OptionalInfoOption = ({ optionId, children }) => {
  // Redux
  const { optionalInfo } = useSelector((state) => state.Pricing)
  const dispatch = useDispatch()
  // Computations
  const selected = optionalInfo.get(optionId)
  // Events
  const handleClick = () => {
    const setOptionalInfo = PRICING_ACTIONS.setOptionalInfo(optionId, !selected)
    dispatch(setOptionalInfo)
  }
  // Render
  return (
    <div className={classConcat('container-fluid', styles.container)}>
      <button
        type="button"
        className={classConcat(
          'row',
          'align-items-center',
          styles.row,
          selected ? styles.selected : null,
        )}
        onClick={handleClick}
      >
        <div className={classConcat(
          'col-10 pl-2 pr-0', styles.col,
        )}
        >
          <div className={styles.text}>{children}</div>
        </div>
        <div
          className={classConcat(
            'col-2 px-0',
            styles.col,
            styles.rightCol,
          )}
        >
          <input type="checkbox" className={styles.check} checked={selected} />
        </div>
      </button>
    </div>
  )
}

OptionalInfoOption.propTypes = {
  optionId: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default OptionalInfoOption
