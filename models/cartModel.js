import mongoose from "mongoose"

const cartSchema = new mongoose.Schema({
    email: {type:String, required: true},
    timestamp: {type:Array,required: true},
    products:{type:Array,required: true},
    address:{type:String,required: true},
});

const cartModel = mongoose.model('Cart', cartSchema);

export default cartModel