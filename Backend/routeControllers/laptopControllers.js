
import expressAsyncHandler from 'express-async-handler';
import Laptop from '../models/productModels/laptopModels';





export const laptop = async(req, res)=>
{
    const product = await Laptop.findById(req.params.id);
    //const product = await Product.findById( req.params.id);
    if(product){ 
        res.send(product);
    }else{
        res.status(404).send({message: 'Product not found'})
    }
}


export const postLaptop =  async(req, res) => { 
    const product = new Laptop({
        name: req.body.name,
        image: req.body.image,
        price: req.body.price,
        type: req.body.type,
        description: req.body.description,
        countInStock: req.body.countInStock,
       
    });
        const newProduct = await product.save();
          
            res.send({
            _id: newProduct.id,
            name: newProduct.name, 
             price: newProduct.price,
           description: newProduct.description,
           countInStock: newProduct.countInStock,
           type: newProduct.type    
        })
    
    }
export const getLaptops = expressAsyncHandler(async(req, res) => {

    const product = await Laptop.find({});
    res.send(product);  
 })


export const getLaptopsID =  expressAsyncHandler(async(req, res)=> 
{
    const product = await Laptop.findById(req.params.id);
    //const product = await Product.findById( req.params.id);
    if(product){ 
        res.send(product);
    }else{
        res.status(404).send({message: 'Product not found'})
    }
}) 
    