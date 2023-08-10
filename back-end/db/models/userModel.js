const connection = require("../connection");
const { SchemaTypes } = require("mongoose");
const Schema = connection.Schema;
const { USER, DISCUSSION, COMMENT } =
  require("../../utils/config/app-constants").SCHEMAS;

const userSchema = new Schema({
  userid: { type: SchemaTypes.String, required: true, unique: true },
  password: { type: SchemaTypes.String, required: true },
  discussions: [{ type: SchemaTypes.ObjectId, ref: DISCUSSION }],
  comments: [{ type: SchemaTypes.ObjectId, ref: COMMENT }],
}, {timestamps : true});

const userModel = connection.model(USER, userSchema);
module.exports = userModel;
