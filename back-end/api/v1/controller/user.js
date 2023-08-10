const morgan = require("morgan");
const logger = require("../../../utils/app-logger")(__filename);
const userOperations = require("../../../db/repo/userOperations");
module.exports = {
  async login(request, response) {
    const userObject = request.body;
    logger.debug("userObject ", userObject);
    const result = await userOperations.read(userObject, response);
    if (result && result.userid ) {
      response.json(result);
    }
  },
  async register(request, response) {
    const userObject = request.body;
    logger.debug("userObject ", userObject);
    const result = await userOperations.add(userObject);
    if (result && result.userid) {
      response.json({status: 1});
    } else {
      response.json({ status: 0});
    }
  },
};
