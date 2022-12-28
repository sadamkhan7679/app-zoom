import React from 'react'
// import useIsInView from '../../../hooks/useIsInView'
import Hero from './Hero/Hero'

const Landing = () => {
  // Ref
  const ref = React.createRef()
  // Constants
  // const isInView = useIsInView(ref)
  const isInView = true
  // Render
  return (
    <section
      key={Math.random() * 10000 + 'landing'}
      ref={ref}
      // style={{ zIndex: 10 }}
      className="full-section"
    >
      <Hero isNav={isInView} />
    </section>
  )
}

export default Landing
