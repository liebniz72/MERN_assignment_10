const mongoose = require('mongoose');
const {Schema,model} = mongoose;

// task: #1

const productSchema = new Schema(
    {
        name:{
            type:String,
            trim: true
        },
        price:{
            type: Number,
            trim: true
        },
        description:{
            type: String,
            trim: true
        }
    },
    {timestamps: true,versionKey: false}
);

const productModel = model("product",productSchema);

module.exports = productModel;