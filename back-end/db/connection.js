const morgan = require("morgan");
const logger = require("../utils/app-logger")(__filename);

const { mongoose } = require("mongoose");
const URI = process.env.MONGODB_URI;

mongoose.connect(URI);

module.exports = mongoose;