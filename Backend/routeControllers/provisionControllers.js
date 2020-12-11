import expressAsyncHandler from 'express-async-handler';
import Product from '../models/productModel';
import Provision from '../models/productModels/provisionModels';


export const provision = async(req, res)=>
{
    const product = await Provision.findById(req.params.id);
    //const product = await Product.findById( req.params.id);
    if(product){ 
        res.send(product);
    }else{
        res.status(404).send({message: 'Product not found'})
    }
}


export const postProvision =  async(req, res) => { 
    const product = new Provision({
        name: req.body.name,
        image: req.body.image,
        price: req.body.price,
        type: req.body.type,
        description: req.body.description,
        brand: req.body.brand,
        countInStock: req.body.countInStock,
       
    });
        const newProduct = await product.save();
          
            res.send({
            _id: newProduct.id,
            name: newProduct.name, 
             price: newProduct.price,
           description: newProduct.description,
           countInStock: newProduct.countInStock,
           brand: newProduct.brand,
           type: newProduct.type    
        })
    
    }
export const getProvisions = expressAsyncHandler(async(req, res) => {

    const product = await Provision.find({});
    res.send(product);  
 })


export const getProvisionsID =  expressAsyncHandler(async(req, res)=> 
{
    const product = await Provision.findById(req.params.id);
    //const product = await Product.findById( req.params.id);
    if(product){ 
        res.send(product);
    }else{
        res.status(404).send({message: 'Product not found'})
    }
}) 
    