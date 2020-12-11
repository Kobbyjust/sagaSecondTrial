import mongoose from 'mongoose'

const maleClothSchema = new mongoose.Schema({
    name: {type: String, required: true},
    image: {type: String, required: true},
    price: {type: Number, default:0, required: true},
    type: {type: String, required: true},
    description: {type: String, required: true},
    countInStock: {type: Number, default:0, required: true},  
},
{
    timestamps: true,
}
) 
const MaleCloth = mongoose.model("MaleCloth", maleClothSchema);

export default MaleCloth;
