const morgan = require("morgan");
const logger = require("../../../utils/app-logger")(__filename);
const discussionOperations = require("../../../db/repo/discussionOperations");
const { default: mongoose } = require("mongoose");

module.exports = {
  async create(req, res) {
    const obj = req.body;
    obj.user = new mongoose.Types.ObjectId(obj.user);
    const result = await discussionOperations.create({
      title: obj.title,
      user: obj.user,
    });
    if (result && result.user) {
      res.json({ message: "Record Added" });
    } else {
      res.json({ message: "Record not Added..." });
    }
  },
  async read(req, res) {
    const obj = req.body;
    obj.discussionId = new mongoose.Types.ObjectId(obj.discussionId);
    const result = await discussionOperations.read(obj);
    if (result && result.user) {
      res.json(result);
    } else {
      res.json({ message: "Not found" });
    }
  },
  async readRecent(req, res) {
    const obj = req.body;
    const result = await discussionOperations.readRecent(obj);
    if (result) {
      res.json(result);
    } else {
      res.json({ message: "Not found" });
    }
  },
};
