
import expressAsyncHandler from 'express-async-handler';
import Bag from '../models/productModels/bagModels';






export const bag = async(req, res)=>
{
    const product = await Bag.findById(req.params.id);
    //const product = await Product.findById( req.params.id);
    if(product){ 
        res.send(product);
    }else{
        res.status(404).send({message: 'Product not found'})
    }
}


export const postBag =  async(req, res) => { 
    const product = new Bag({
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
export const getBags = expressAsyncHandler(async(req, res) => {

    const product = await Bag.find({});
    res.send(product);  
 })


export const getBagsID =  expressAsyncHandler(async(req, res)=> 
{
    const product = await Bag.findById(req.params.id);
    //const product = await Product.findById( req.params.id);
    if(product){ 
        res.send(product);
    }else{
        res.status(404).send({message: 'Product not found'})
    }
}) 
    