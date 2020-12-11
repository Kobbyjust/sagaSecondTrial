import  mongoose  from "mongoose";



const laptopSchema = new mongoose.Schema({
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
const Laptop = mongoose.model("Laptop", laptopSchema);

export default Laptop;
