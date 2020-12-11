import  mongoose  from "mongoose";



const computerAccessoriesSchema = new mongoose.Schema({
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
const ComputerAccessories = mongoose.model("ComputerAccessories", computerAccessoriesSchema);

export default ComputerAccessories;