const userModel = require('../models/userModel');
module.exports = {
    async add(userObject){
        try{
            const doc = await userModel.create(userObject);
            return doc;
        }catch(e){
            return e;
        }
    },
    async read(userObject){
        const doc = await userModel.findOne({'userid':userObject.userid, 'password':userObject.password});
        return doc;
    },
    async update(userObject){
        const doc = await userModel.findOneAndUpdate({'userid':userObject.userid},{'password':userObject.password});
        return doc;
    },
    remove(userObject){

    },
    async addComment(obj){
        try{
            const commentId = obj._id;
            const userId = obj.user;
            var user = await userModel.findById(userId).exec();
            await user.comments.push(commentId);
            await user.save();
            }catch(e){
                console.log(e);
            }
    },
    async addDiscussion(obj){
        try{
            const discussionId = obj._id;
            const userId = obj.user;
            var user = await userModel.findById(userId).exec();
            await user.discussions.push(discussionId);
            await user.save();
            }catch(e){
                console.log(e);
            }
    }
}