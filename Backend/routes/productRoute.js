import express from 'express';
import Product from '../models/productModel.js';
import shop_Books from '../shop_Books.js';
import expressAsyncHandler from 'express-async-handler'
import { getBooks, getProduct } from '../routeControllers/productsControllers.js';
import { getProvisions, getProvisionsID, postProvision } from '../routeControllers/provisionControllers.js';
import { getPhones, getPhonesID, postPhone } from '../routeControllers/phoneControllers.js';
import { getLaptops, getLaptopsID, postLaptop } from '../routeControllers/laptopControllers.js';
import { getComputerAccessories, getComputerAccessoriesID,  postComputerAccessories } from '../routeControllers/computerAccessoriesControllers.js';
import { getFootwears, getFootwearsID, postFootwear } from '../routeControllers/footwearControllers.js';
import { getFemaleCloths, getFemaleClothsID, postFemaleCloth } from '../routeControllers/femaleClothControllers.js';
import { getMaleCloths, getMaleClothsID, postMaleCloth } from '../routeControllers/maleClothControllers.js';
import { getBags, getBagsID, postBag } from '../routeControllers/bagControllers.js';
import { getCosmetics, getCosmeticsID, postCosmetic } from '../routeControllers/cosmeticControllers.js';
import { getEngineerings, getEngineeringsID, postEngineering } from '../routeControllers/engineeringControllers.js';
import { getElectronics, getElectronicsID, postElectronic } from '../routeControllers/electronicControllers.js';


const productRouter = express.Router();

productRouter.get('/Books', expressAsyncHandler(async(req, res) => {
   const product = await Product.find({});
   res.send(product);
})
);
  

productRouter.get('/seed', expressAsyncHandler(async(req, res) =>
{  
   // await Product.remove();
const createdProducts = await Product.insertMany(shop_Books.product);
res.send({createdProducts});

}))
productRouter.get('/Books:id', expressAsyncHandler(async(req, res)=>
{
    const product = await Product.findById(req.params.id);
    //const product = await Product.findById( req.params.id);
    if(product){ 
        res.send(product);
    }else{
        res.status(404).send({message: 'Product not found'})
    }
}))
     

productRouter.post('/products', async(req, res) => { 
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
    
    }) 

productRouter.get('/products',async(req, res) => {
        const productList = await Product.find({});
        res.send(productList);

    }
    )


/*----Provision----*/
productRouter.get('/Provisions', getProvisions )
productRouter.post('/Provisions', postProvision)
productRouter.get('/Provisions:id', getProvisionsID)

/*---Phone---*/ 
productRouter.get('/Phones', getPhones)
productRouter.post('/Phones',postPhone)
productRouter.get('/Phones:id', getPhonesID)

/*---Laptop---*/
productRouter.get('/Laptops', getLaptops)
productRouter.post('/Laptops',postLaptop)
productRouter.get('/Laptops:id',getLaptopsID)

/*---Computer Accessories---*/
productRouter.get('/ComputerAccessories', getComputerAccessories)
productRouter.post('/ComputerAccessories',postComputerAccessories)
productRouter.get('/ComputerAccessories:id',getComputerAccessoriesID)

/*---Footwear---*/
productRouter.get('/Footwears', getFootwears)
productRouter.post('/Footwears',postFootwear)
productRouter.get('/Footwears:id', getFootwearsID)

/*---Female Cloth---*/
productRouter.get('/FemaleCloths', getFemaleCloths)
productRouter.post('/FemaleCloths',postFemaleCloth)
productRouter.get('/FemaleCloths:id', getFemaleClothsID)

/*---Male Cloth---*/
productRouter.get('/MaleCloths', getMaleCloths)
productRouter.post('/MaleCloths',postMaleCloth)
productRouter.get('/MaleCloths:id', getMaleClothsID)

/*---Bag---*/
productRouter.get('/Bags', getBags)
productRouter.post('/Bags',postBag)
productRouter.get('/Bags:id', getBagsID)

/*---Cosmetics---*/
productRouter.get('/Cosmetics', getCosmetics)
productRouter.post('/Cosmetics',postCosmetic)
productRouter.get('/Cosmetics:id', getCosmeticsID)

/*---Engineering---*/
productRouter.get('/Engineerings', getEngineerings)
productRouter.post('/Engineerings',postEngineering)
productRouter.get('/Engineerings:id', getEngineeringsID)

/*---Electronic---*/
productRouter.get('/Electronics', getElectronics)
productRouter.post('/Electronics',postElectronic)
productRouter.get('/Electronics:id', getElectronicsID)



/*router.get("/Books", (req, res) =>{ 
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
     
router.post("/Books", async(req, res) =>{
    const product = new Product({
        name: req.body.name,
        image: req.body.image,
        price: req.body.price,
        type: req.body.type,
        description: req.body.description,
        countInStock: req.body.countInStock,
    })
    const newProduct = await product.save();
    if(newProduct){
        return res.status(201).send({message: 'New Product Created', data: newProduct});
    }
    return res.status(500).send({message: 'Error in Creating Product'});
})

router.put("/:name", async(req, res) =>{
    const productName = req.params.name;
    const product = await product.find({name: productName});
    if(product){
        product.name = req.body.name;
        product.image= req.body.image;
        product.price= req.body.price;  
        product.type= req.body.type;
        product.description= req.body.description;
        product.countInStock= req.body.countInStock;

        const updatedProduct = await product.save();
        if(updatedProduct){
            return res.status(201).send({message: ' Product Updated', data: updatedProduct});
        }
    }

    return res.status(500).send({message: 'Error in Updating Product'});
});


router.delete("/name", async(req, res) => {
const deletedProduct = await Product.findById(req.params.id);
if(deletedProduct){
    await deletedProduct.remove();
    res.send({message: "Product Deleted"});
}
 else {res.send("Error in Deleting.")}
});*/

export default productRouter;
