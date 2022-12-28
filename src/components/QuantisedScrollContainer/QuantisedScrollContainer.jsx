import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import styles from './QuantisedScrollContainer.module.css'
import QUANTISED_SCROLLER_ACTIONS from '../../redux/actions/QuantisedScroller'

const QuantisedScrollContainer = ({ pageId, children }) => {
  // Hooks
  const { scrollPosition } = useSelector((state) => state.QuantisedScroller)
  const dispatch = useDispatch()
  // Effects
  // - On mount - Lock body.
  React.useEffect(() => {
    if (!document || !document.body) return
    document.body.style.overflow = 'hidden'
    document.body.style.minHeight = 'calc(100 * var(--ivh))'
  }, [])
  // - On every pageId change (page navigation).
  React.useEffect(() => {
    // Clear step indices.
    const clearStepIndices = QUANTISED_SCROLLER_ACTIONS.clearStepIndices()
    dispatch(clearStepIndices)
    // Update page ID prop.
    // (Trigger useQuantisedScroller hooks to register their
    //  step indices).
    const readPage = QUANTISED_SCROLLER_ACTIONS.readPage(pageId)
    dispatch(readPage)
  }, [pageId])
  // Functions
  const getStyle = () => ({
    top: `${-scrollPosition}px`,
  })
  // Render
  return (
    <article className={styles.quantisedScrollContainer} style={getStyle()}>
      {children}
    </article>
  )
}

QuantisedScrollContainer.propTypes = {
  pageId: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default QuantisedScrollContainer
