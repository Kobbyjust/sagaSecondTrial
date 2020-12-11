import expressAsyncHandler from 'express-async-handler';
import Product from '../models/productModel';
import MaleCloth from '../models/productModels/maleClothModel';




export const maleCloth = async(req, res)=>
{
    const product = await MaleCloth.findById(req.params.id);
    //const product = await Product.findById( req.params.id);
    if(product){ 
        res.send(product);
    }else{
        res.status(404).send({message: 'Product not found'})
    }
}


export const postMaleCloth =  async(req, res) => { 
    const product = new MaleCloth({
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
export const getMaleCloths = expressAsyncHandler(async(req, res) => {

    const product = await MaleCloth.find({});
    res.send(product);  
 })


export const getMaleClothsID =  expressAsyncHandler(async(req, res)=> 
{
    const product = await MaleCloth.findById(req.params.id);
    //const product = await Product.findById( req.params.id);
    if(product){ 
        res.send(product);
    }else{
        res.status(404).send({message: 'Product not found'})
    }
}) 
    