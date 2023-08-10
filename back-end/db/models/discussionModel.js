const connection = require("../connection");
const { SchemaTypes } = require("mongoose");
const Schema = connection.Schema;
const { DISCUSSION, USER, COMMENT } =
  require("../../utils/config/app-constants").SCHEMAS;

const discussionSchema = new Schema({
  title: { type: SchemaTypes.String, required: true },
  user: { type: SchemaTypes.ObjectId, required: true, ref: USER },
  comments: [{ type: SchemaTypes.ObjectId, ref: COMMENT }],
}, {timestamps: true});

const discussionModel = connection.model(DISCUSSION, discussionSchema);
module.exports = discussionModel;
