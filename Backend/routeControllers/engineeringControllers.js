
import expressAsyncHandler from 'express-async-handler';
import Engineering from '../models/productModels/engineeringModels';






export const engineering = async(req, res)=>
{
    const product = await Engineering.findById(req.params.id);
    //const product = await Product.findById( req.params.id);
    if(product){ 
        res.send(product);
    }else{
        res.status(404).send({message: 'Product not found'})
    }
}


export const postEngineering =  async(req, res) => { 
    const product = new Engineering({
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
export const getEngineerings = expressAsyncHandler(async(req, res) => {

    const product = await Engineering.find({});
    res.send(product);  
 })


export const getEngineeringsID =  expressAsyncHandler(async(req, res)=> 
{
    const product = await Engineering.findById(req.params.id);
    //const product = await Product.findById( req.params.id);
    if(product){ 
        res.send(product);
    }else{
        res.status(404).send({message: 'Product not found'})
    }
}) 
    