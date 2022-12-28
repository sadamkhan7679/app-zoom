import React from 'react'

const clearQuantisedScroller = () => {
  React.useEffect(() => {
    if (!document || !document.body) return
    document.body.style.overflow = null
    document.body.style.minHeight = null
  }, [])
}

export default clearQuantisedScroller
