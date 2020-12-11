
import expressAsyncHandler from 'express-async-handler';
import Electronic from '../models/productModels/electronicModels';





export const electronic = async(req, res)=>
{
    const product = await Electronic.findById(req.params.id);
    //const product = await Product.findById( req.params.id);
    if(product){ 
        res.send(product);
    }else{
        res.status(404).send({message: 'Product not found'})
    }
}


export const postElectronic =  async(req, res) => { 
    const product = new Electronic({
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
export const getElectronics = expressAsyncHandler(async(req, res) => {

    const product = await Electronic.find({});
    res.send(product);  
 })


export const getElectronicsID =  expressAsyncHandler(async(req, res)=> 
{
    const product = await Electronic.findById(req.params.id);
    //const product = await Product.findById( req.params.id);
    if(product){ 
        res.send(product);
    }else{
        res.status(404).send({message: 'Product not found'})
    }
}) 
    