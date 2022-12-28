import QueryString from 'query-string'

const parsePricingId = (location) => {
  if (!window) return null
  if (!location.search) return null

  const params = QueryString.parse(location.search)
  if (!params || !params.id) return null

  const { id } = params
  return id
}

export default parsePricingId
