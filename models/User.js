const { Schema, model, Types } = require("mongoose");

// This file defines a Mongoose model for a User in your MongoDB database.
// This code sets up a user schema with email, password, and a list of links, and exports the model for use in your backend.

const schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  links: [{ type: Types.ObjectId, ref: "Link" }],
});

module.exports = model("User", schema);
