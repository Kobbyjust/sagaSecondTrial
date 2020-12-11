import expressAsyncHandler from 'express-async-handler';
import Product from '../models/productModel';


export const products = async(req, res)=>
{
    const product = await Product.findById(req.params.id);
    //const product = await Product.findById( req.params.id);
    if(product){ 
        res.send(product);
    }else{
        res.status(404).send({message: 'Product not found'})
    }
}


export const postProduct =  async(req, res) => { 
    const product = new Product({
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
export const getBooks = expressAsyncHandler(async(req, res) => {

    const product = await Product.find({});
    res.send(product);  
 })


export const getBooksID =  expressAsyncHandler(async(req, res)=>
{
    const product = await Product.findById(req.params.id);
    //const product = await Product.findById( req.params.id);
    if(product){ 
        res.send(product);
    }else{
        res.status(404).send({message: 'Product not found'})
    }
}) 
    