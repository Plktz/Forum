const discussionModel = require("../models/discussionModel");
const { addDiscussion } = require("./userOperations");

module.exports = {
    async create(obj){
        try{
            const user = obj.user;
            const title = obj.title;
            const doc = await discussionModel.create({
                'title' : title,
                'user' : user
            })
            addDiscussion(doc);
            return doc;
        }catch(e){
            return e;
        }
    },

    async read(obj){
        const discussionId = obj.discussionId;
        const doc = await discussionModel.findById(discussionId).populate(['user']);
        return doc;
    },

    async readRecent(obj){
        // const doc = await discussionModel.find().sort({date: -1}).limit(obj.limit).populate('user');
        const doc = await discussionModel.find().sort({createdAt: -1}).populate('user');
        return doc;
    },
    
    async addComment(obj){
    try{
        const commentId = obj._id;
        const discussionId = obj.discussion;
        var discussion = await discussionModel.findById(discussionId).exec();
        await discussion.comments.push(commentId);
        await discussion.save();
        }catch(e){
            console.log(e);
        }
    }
}