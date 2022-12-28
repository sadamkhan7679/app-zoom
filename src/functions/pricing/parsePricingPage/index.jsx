import QueryString from 'query-string'

const parsePricingPage = (location) => {
  if (!window) return null
  if (!location.search) return null

  const params = QueryString.parse(location.search)
  if (!params || !params.page) return null

  const { page } = params
  return page
}

export default parsePricingPage