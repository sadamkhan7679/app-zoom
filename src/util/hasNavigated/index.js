import extractIdFromPath from '../ExtractIdFromPath';

/**
 * Check if specified ID has been selected in given path.
 * For example:
 *   For ID 'cta-footer', path '/about#cta-footer' will return true,
 *   whereas path '/about' will return false,
 *   as will '/about#hero'.
 * @param {*} id
 * @param {*} path
 * @returns {boolean}
 */
const hasNavigated = (id, path) => {
  const foundId = extractIdFromPath(path);
  const foundIdExists = (foundId !== null);
  if (!foundIdExists) return false;
  return foundId === id;
};

export default hasNavigated;
