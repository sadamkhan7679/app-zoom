import { useEffect } from 'react'
import * as Cookies from 'js-cookie'
import { useSelector } from 'react-redux'
import putPricingState from '../../../procedures/pricing/putPricingState'
import packPricingObject from '../../../functions/pricing/packPricingObject'

const usePricingStateSync = () => {
  const Pricing = useSelector((state) => state.Pricing)
  const { optionalInfo, linkCount } = Pricing

  useEffect(() => {
    const pricingObject = packPricingObject(Pricing)

    const idCookie = Cookies.getJSON('opz-pricing-id')
    const id = idCookie ? idCookie.id : null

    if (!id) return () => { }

    putPricingState(Pricing.id, pricingObject)

    return () => { }
  }, [optionalInfo, linkCount])

  return null
}

export default usePricingStateSync
