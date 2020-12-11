import expressAsyncHandler from 'express-async-handler';
import Product from '../models/productModel';
import FemaleCloth from '../models/productModels/femaleClothModel';




export const femaleCloth = async(req, res)=>
{
    const product = await FemaleCloth.findById(req.params.id);
    //const product = await Product.findById( req.params.id);
    if(product){ 
        res.send(product);
    }else{
        res.status(404).send({message: 'Product not found'})
    }
}


export const postFemaleCloth =  async(req, res) => { 
    const product = new FemaleCloth({
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
export const getFemaleCloths = expressAsyncHandler(async(req, res) => {

    const product = await FemaleCloth.find({});
    res.send(product);  
 })


export const getFemaleClothsID =  expressAsyncHandler(async(req, res)=> 
{
    const product = await FemaleCloth.findById(req.params.id);
    //const product = await Product.findById( req.params.id);
    if(product){ 
        res.send(product);
    }else{
        res.status(404).send({message: 'Product not found'})
    }
}) 
    