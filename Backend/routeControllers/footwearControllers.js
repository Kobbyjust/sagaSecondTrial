import expressAsyncHandler from 'express-async-handler';
import Product from '../models/productModel';
import Footwear from '../models/productModels/footwearModels';



export const footwear = async(req, res)=>
{
    const product = await Footwear.findById(req.params.id);
    //const product = await Product.findById( req.params.id);
    if(product){ 
        res.send(product);
    }else{
        res.status(404).send({message: 'Product not found'})
    }
}


export const postFootwear =  async(req, res) => { 
    const product = new Footwear({
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
export const getFootwears = expressAsyncHandler(async(req, res) => {

    const product = await Footwear.find({});
    res.send(product);  
 })


export const getFootwearsID =  expressAsyncHandler(async(req, res)=> 
{
    const product = await Footwear.findById(req.params.id);
    //const product = await Product.findById( req.params.id);
    if(product){ 
        res.send(product);
    }else{
        res.status(404).send({message: 'Product not found'})
    }
}) 
    