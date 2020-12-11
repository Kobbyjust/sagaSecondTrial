
import expressAsyncHandler from 'express-async-handler';
import Cosmetic from '../models/productModels/cosmeticModels';






export const cosmetic = async(req, res)=>
{
    const product = await Cosmetic.findById(req.params.id);
    //const product = await Product.findById( req.params.id);
    if(product){ 
        res.send(product);
    }else{
        res.status(404).send({message: 'Product not found'})
    }
}


export const postCosmetic =  async(req, res) => { 
    const product = new Cosmetic({
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
export const getCosmetics = expressAsyncHandler(async(req, res) => {

    const product = await Cosmetic.find({});
    res.send(product);  
 })


export const getCosmeticsID =  expressAsyncHandler(async(req, res)=> 
{
    const product = await Cosmetic.findById(req.params.id);
    //const product = await Product.findById( req.params.id);
    if(product){ 
        res.send(product);
    }else{
        res.status(404).send({message: 'Product not found'})
    }
}) 
    