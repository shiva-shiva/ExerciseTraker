const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    username:{type:String, required:true},
    description:{type:String, required:true},
    duration:{type:Number, require:true},
    date: {type:Date , required: true},
},{
    timestamps :true,
});

const Exercise = mongoose.model('Exersice', exerciseSchema);
module.exports = Exercise;