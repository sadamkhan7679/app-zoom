import React from 'react'
import PropTypes from 'prop-types'
import styles from './Downloads.module.css'
import { endLoop, startLoop } from '../../../../../util/animationLoop'

const INCR = 0.09

const Downloads = ({ show, navIndex, max }) => {
  // State
  const [downloads, setDownloads] = React.useState(0)
  // Getters
  const getFormattedDownloads = () => {
    if (downloads > 1000000) {
      return `${Math.floor(downloads / 1000000)
      }M+`
    }
    if (downloads > 1000) {
      return `${Math.floor(downloads / 1000)}K+`
    }
    return downloads
  }
  // Effects
  // - Count downloads
  React.useEffect(() => {
    // If navigating away from 'Popular Apps', do nothing.
    if (!show) return () => {}
    // Set downloads back to zero.
    setDownloads(0)
    // Start loop of incrementing downloads.
    const loopKey = 'downloads'
    let counter = 0
    const onLoop = () => {
      // If reached max, do nothing.
      if (counter === max) return
      // Otherwise, increment.
      const nextCounter = counter + INCR * max
      counter = Math.min(max, nextCounter)
      setDownloads(counter)
    }
    startLoop(onLoop, loopKey, 30)
    return () => endLoop(onLoop, loopKey)
  }, [navIndex, max])
  // Render
  return (
    <span className={styles.downloads}>
      {getFormattedDownloads()}
      {' '}
      downloads
    </span>
  )
}

Downloads.propTypes = {
  show: PropTypes.bool.isRequired,
  navIndex: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
}

export default Downloads
