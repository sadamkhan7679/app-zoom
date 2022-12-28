import QueryString from "query-string";

const parsePricingMesg = (location) => {
  if (!window) return null;
  if (!location.search) return null;

  const params = QueryString.parse(location.search);
  if (!params || !params.mesg) return null;

  const { mesg } = params;
  if (mesg) return mesg;
  else return "";
};

export default parsePricingMesg;
