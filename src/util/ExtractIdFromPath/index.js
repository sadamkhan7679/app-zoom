
/**
 * Extract ID from given path.
 * For example:
 *   '/about#hero' will return 'hero'
 * @param {*} path
 * @returns {string}
 */
const extractIdFromPath = (path) => {
  const idFinder = /[^#]*#([a-z0-9]+)/g;
  const regexResult = idFinder.exec(path);
  // If there is not result or no group #1, there is no ID.
  const idExists = (regexResult && regexResult.length > 1);
  if (!idExists) return null;
  // ID will reside in matched group #1.
  const id = regexResult[1];
  return id;
};

export default extractIdFromPath;
