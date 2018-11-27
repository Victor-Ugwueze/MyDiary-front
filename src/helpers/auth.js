// third-party libraries
import jwt from 'jsonwebtoken';

const auth = {
  /**
   * @param {string} token
   * @description Verifies user token
   * @return {object} object
   */
  decodeToken(token) {
    let decoded = {};
    try {
      decoded = jwt.decode(token);
    } catch (error) {
      decoded = {
        error: error.message,
      };
    }
    return decoded;
  },

  /**
   * @static
   * @param {string} token
   * @param {boolean} response
   * @param {function} next
   * @description Verifies user token
   * @return {object} object
   */
  validateToken(token) {
    if (!token) {
      return false;
    }
    const decoded = auth.decodeToken(token);
    if (token.error) {
      return false;
    }
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      return false;
    }
    return true;
  },
};

export default auth;
