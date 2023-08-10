const morgan = require("morgan");
const logger = require("../../../utils/app-logger")(__filename);
const commentOperations = require('../../../db/repo/commentOperations');
const {mongoose} = require('mongoose');

module.exports = {
    async add(req, res){
        const obj = req.body;
        logger.debug("obj");
        obj.userId = new mongoose.Types.ObjectId(obj.userId);
        obj.discussionId = new mongoose.Types.ObjectId(obj.discussionId);
        const result = await commentOperations.add({
            user: obj.userId,
            discussion: obj.discussionId,
            text: obj.text
        });
        if(result && result.user){
            res.json({ message: "Record Added" });
          } else {
            res.json({ message: "Record not Added..." });
          }

    },
    async read(req, res){
        const obj = req.body;
        obj.commentId = new mongoose.Types.ObjectId(obj.commentId);
        const result = await commentOperations.read(obj);
        if (result && result.user) {
          res.json(result);
        } else {
          res.json({ message: "Not found" });
        }
    }
}