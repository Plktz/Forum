const connection = require("../connection");
const { SchemaTypes } = require("mongoose");
const Schema = connection.Schema;
const {COMMENT, DISCUSSION, USER} = require("../../utils/config/app-constants").SCHEMAS;

const commentSchema = new Schema({
    user : {type: SchemaTypes.ObjectId, required : true, ref: USER},
    text : {type: SchemaTypes.String, required: true},
    discussion: {type: SchemaTypes.ObjectId, required : true, ref: DISCUSSION}
},{timestamps: true});

const commentModel = connection.model(COMMENT, commentSchema);
module.exports = commentModel;
