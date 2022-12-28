/* eslint-disable react/no-danger */
import React from 'react'
import Helmet from 'react-helmet'
import '../../assets/lib/bootstrap-grid.min.css'
// import initInspectlet from './initInspectlet'

const Head = () => {
  // State
  // const [fontLoaded, setFontLoaded] = React.useState(false)
  // const [acuityButtonCssLoaded, setAcuityButtonCssLoaded] = React.useState(false)
  // Effects
  // - Initialise Inspectlet
  // React.useEffect(() => {
  //   if (!window) return
  //   initInspectlet()
  // }, [])
  //Render
  return (
    <Helmet>
      <title>Apps by OpZoom</title>
      <link
        // rel={fontLoaded ? 'stylesheet' : 'preload'}
        rel={'stylesheet'}
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
        as="style"
        // onLoad={() => setFontLoaded(true)}
      />
      {/*<link*/}
      {/*  // rel={acuityButtonCssLoaded ? 'stylesheet' : 'preload'}*/}
      {/*  rel={'stylesheet'}*/}
      {/*  href="https://embed.acuityscheduling.com/embed/button/13723659.css"*/}
      {/*  as="style"*/}
      {/*  // onLoad={() => setAcuityButtonCssLoaded(true)}*/}
      {/*/>*/}
      {/*<script*/}
      {/*  src="https://embed.acuityscheduling.com/embed/button/13723659.js"*/}
      {/*  async*/}
      {/*  defer*/}
      {/*/>*/}
      {/*<script*/}
      {/*  src="https://embed.acuityscheduling.com/embed/bar/13723659.js"*/}
      {/*  async*/}
      {/*  defer*/}
      {/*/>*/}
      {/*<script*/}
      {/*  src="https://embed.acuityscheduling.com/js/embed.js"*/}
      {/*  type="text/javascript"*/}
      {/*  defer*/}
      {/*/>*/}
    </Helmet>
  )
}

export default Head
