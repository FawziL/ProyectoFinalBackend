import mongoose from "mongoose"

const mesaggeSchema =  new mongoose.Schema({
    email: { type: String, required: true, unique: true},
    type: { type: String, required: true },
    timestamp: {type:Array,required: true},
    message: { type: String, required: true }
})

const messageModel = mongoose.model('Messages', mesaggeSchema);

export default messageModel