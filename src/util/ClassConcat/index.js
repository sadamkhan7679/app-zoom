
/**
 * Joins classNames together with spaces in between.
 * E.g. 'className1 className2 className3'
 * @param  {...string} classNames
 * @returns {string}
 */
const classConcat = (...classNames) => {
  let intClassName = classNames[0];
  for (let i = 1, limit = classNames.length; i < limit; i += 1) {
    const className = classNames[i];
    if (className) intClassName = `${intClassName} ${className}`;
  }
  const conClassName = intClassName;
  return conClassName;
};

export default classConcat;
