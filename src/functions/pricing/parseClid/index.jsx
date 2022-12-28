import QueryString from "query-string";

const parseClid = (location) => {
  if (!window) return null;
  if (!location.search) return null;

  const params = QueryString.parse(location.search);
  // if (!params || !params.gclid) return null
  if (!params) return null;

  const { gclid: clid } = params;

  return params;
};

export default parseClid;
