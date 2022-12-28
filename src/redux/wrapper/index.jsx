import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import useStore from '../store'

const ReduxWrapper = ({ children }) => {
  // Hooks
  //  - This hook makes redux state persistant in cookie.
  const store = useStore()
  // Render
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

ReduxWrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ReduxWrapper
