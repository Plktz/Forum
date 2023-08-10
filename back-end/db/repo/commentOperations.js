
const commentModel = require('../models/commentModel');
const discussionOperations = require('./discussionOperations');
const userOperations = require("./userOperations");

module.exports = {
    async add(obj){
        try{
            const doc = await commentModel.create(obj);
            discussionOperations.addComment(doc);
            userOperations.addComment(doc);
            return doc;
        } catch(e){
            return e;
        }
    },
    async read(obj){
        const commentId = obj.commentId;
        const doc = await commentModel.findById(commentId).populate('user');
        return doc;
    },
    async delete(obj){
        const commentId = obj.commentId;
        const doc = await commentModel.findByIdAndDelete(commentId);
    }
}
