import mongoose from 'mongoose';

const provisionSchema = new mongoose.Schema({
    name: {type: String, required: true},
    image: {type: String, required: true},
    price: {type: Number, default:0, required: true},
    type: {type: String, required: true},
    description: {type: String, required: true},
    brand: {type: String },
    countInStock: {type: Number, default:0, required: true},  
},
{
    timestamps: true,
}
) 
const Provision = mongoose.model("Provision", provisionSchema);

export default Provision;
