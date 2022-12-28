import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { Lethargy } from 'lethargy'
import QUANTISED_SCROLLER_ACTIONS from '../../redux/actions/QuantisedScroller'

const SCROLL_BLOCK_PERIOD = 440

const QuantisedScrollController = ({ hash }) => {
  // Redux
  const { navId } = useSelector((state) => state.QuantisedScroller)
  const dispatch = useDispatch()
  // Event Handlers
  const scrollUp = () => {
    const navUp = QUANTISED_SCROLLER_ACTIONS.navUp()
    dispatch(navUp)
  }
  const scrollDown = () => {
    const navDown = QUANTISED_SCROLLER_ACTIONS.navDown()
    dispatch(navDown)
  }
  // Effects
  // - Read NavID from url hash.
  React.useEffect(() => {
    const readHash = QUANTISED_SCROLLER_ACTIONS.readHash(hash)
    dispatch(readHash)
  }, [])
  // - Update URL based on navId
  React.useEffect(() => {
    window.location.href = `#${navId}`
  },[])
  // - Listen to scroll triggering events.
  React.useEffect(() => {
    if (typeof window === 'undefined') return null
    //
    const lethargy = new Lethargy()
    // Scroll Blocking Mechanism
    let scrollBlocked = false
    const blockScroll = () => {
      scrollBlocked = true
      setTimeout(
        () => { scrollBlocked = false },
        SCROLL_BLOCK_PERIOD,
      )
    }
    // Keyboard Events
    const onKeyDown = (e) => {
      if (e.key === 'ArrowUp') scrollUp()
      if (e.key === 'ArrowDown') scrollDown()
    }
    // Wheel Scroll Events
    const onScroll = (e) => {
      // e.preventDefault()
      e.stopPropagation()
      const scrollAction = lethargy.check(e)
      if (scrollBlocked) return
      if (scrollAction === false) return
      if (scrollAction > 0) {
        scrollUp()
        blockScroll()
      }
      if (scrollAction < 0) {
        scrollDown()
        blockScroll()
      }
    }
    // Touch Events
    let initialTouchY = 0
    const onTouchStart = (e) => {
      const touches = e.changedTouches
      initialTouchY = touches[0].pageY
    }
    const onTouchMove = (e) => {
      if (scrollBlocked) return
      const touches = e.changedTouches
      const currentTouchY = touches[0].pageY
      const touchDeltaY = currentTouchY - initialTouchY
      if (touchDeltaY > 50) {
        scrollUp()
        blockScroll()
      }
      if (touchDeltaY < -50) {
        scrollDown()
        blockScroll()
      }
    }
    // Construct and Deconstruct Listeners
    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('wheel', onScroll)
    window.addEventListener('touchstart', onTouchStart)
    window.addEventListener('touchmove', onTouchMove)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('wheel', onScroll)
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchmove', onTouchMove)
    }
  }, [])
  //
  return null
}

QuantisedScrollController.propTypes = {
  hash: PropTypes.string.isRequired,
}

export default QuantisedScrollController
