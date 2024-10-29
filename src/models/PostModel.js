const mongoose = require("mongoose");

// 1. Make a schema

// const someSchema = new mongoose.Schema(objectDefiningDataRules, SchemaOptions);
const PostSchema = new mongoose.Schema({

});

// 2. Make a model based on the schema

const PostModel = mongoose.model("Post", PostSchema);

// 3. Export the model for the rest of our code to use 