import express from 'express';
import Product from '../models/productModel';

const router = express.Router();

router.get("/Books", (req, res) =>{ 
    const products = await Product.find({});
    res.send(products);
    });
      
    router.get("/:id", (req, res) =>{
        const products = await Product.findOne({_id: req.params.id});
        if(product){
            res.send(products);
        }
        else{
       res.status(404).send({message: "Product not found"})
    }
        });

  export default router;      