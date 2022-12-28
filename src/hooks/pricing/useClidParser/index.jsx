import { useLocation } from '@reach/router'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import parseClid from '../../../functions/pricing/parseClid'
import PRICING_ACTIONS from '../../../redux/actions/Pricing'

const useClidParser = () => {
  const location = useLocation()
  const dispatch = useDispatch()

  useEffect(() => {
    const clid = parseClid(location)

    if (clid) {
      const setClid = PRICING_ACTIONS.setClid(clid)
      dispatch(setClid)
    }

    return () => {}
  },[])

  return null
}

export default useClidParser
