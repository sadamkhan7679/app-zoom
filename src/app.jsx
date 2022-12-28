
import React from 'react'
import PropTypes from 'prop-types'
import ReduxWrapper from './redux/wrapper'

const AppWrapper = ({ element }) => (
  <ReduxWrapper>
    {element}
  </ReduxWrapper>
)

AppWrapper.propTypes = {
  element: PropTypes.node.isRequired,
}

export default AppWrapper
