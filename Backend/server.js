import express from 'express';
import config from './config';
import dotenv from 'dotenv';
import shop_Books from './shop_Books';
import mongoose from 'mongoose';
import userRoute from './routes/userRoute'
import productRoute from './routes/userRoute'
import bodyParser from 'body-parser';
import productRouter from './routes/productRoute';
import orderRouter from './routes/orderRoute';
import userRouter from './routes/userRoute';
//import config from 'config';

dotenv.config();

const mongodbUrl = config.MONGODB_URL;
mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).catch(error => console.log(error.reason));

const app = express(); 

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//app.use(bodyParser.json());
 
app.use('/api/users', userRouter);

app.use('/api/product', productRouter);

app.use('/api/orders', orderRouter);

/*app.get('/api/product', (reg, res) => {
    
    res.send(shop_Books.product);
});*/
//error catcher
app.use((err, req, res, next) =>
{
    res.status(500).send({message: err.message})
})

/*
app.get('/api/productProvision', (reg, res) => {
    
    res.send(shop_Provisions.Provision);
});
app.get('/api/productMobile', (reg, res) => {
    
    res.send(shop_Mobiles.product);
});

app.get('/api/productFootwear', (reg, res) => {
    
    res.send(shop_Footwear.product);
});

app.get('/api/productComputer', (reg, res) => {
    
    res.send(shop_Computer.product);
});

app.get('/api/productElectronic', (reg, res) => {
    
    res.send(shop_Electronics.product);
});

app.get('/api/productCloth', (reg, res) => {
    
    res.send(shop_Cloth.product);
});


app.get('/api/productCosmetics', (reg, res) => {
    
    res.send(shop_Cosmetics.product);
});
*/
app.get('/api/product/:id', (reg, res) => {
    const productID = reg.params.id;
    const products= shop_Books.product.find(x=>x._id === productID );
    if(products)    
    res.send(products);
    else
    res.status(404).send({msg: "Product Not Found."}) 
});


/*app.get('/api/productProvision/:id', (reg, res) => {
    const productId = reg.params.id;
    const products= shop_Provisions.Provision.find(x=>x._id === productId );
    if(products)    
    res.send(products);
    else
    res.status(404).send({msg: "Product Not Found."}) 
});

app.get('/api/productMobile/:id', (reg, res) => {
    const productID = reg.params.id;
    const products= shop_Mobiles.product.find(x=>x._id === productID );
    if(products)    
    res.send(products);
    else
    res.status(404).send({msg: "Product Not Found."}) 
});

app.get('/api/productFootwear/:id', (reg, res) => {
    const productID = reg.params.id;
    const products= shop_Footwear.product.find(x=>x._id === productID );
    if(products)    
    res.send(products);
    else
    res.status(404).send({msg: "Product Not Found."}) 
});

app.get('/api/productElectronic/:id', (reg, res) => {
    const productID = reg.params.id;
    const products= shop_Electronics.product.find(x=>x._id === productID );
    if(products)    
    res.send(products);
    else
    res.status(404).send({msg: "Product Not Found."}) 
});
app.get('/api/productCloth/:id', (reg, res) => {
    const productID = reg.params.id;
    const products= shop_Cloth.product.find(x=>x._id === productID );
    if(products)    
    res.send(products);
    else
    res.status(404).send({msg: "Product Not Found."}) 
});
app.get('/api/productComputer/:id', (reg, res) => {
    const productID = reg.params.id;
    const products= shop_Computer.product.find(x=>x._id === productID );
    if(products)    
    res.send(products);
    else
    res.status(404).send({msg: "Product Not Found."}) 
});

app.get('/api/productCosmetics/:id', (reg, res) => {
    const productID = reg.params.id;
    const products= shop_Cosmetics.product.find(x=>x._id === productID );
    if(products)    
    res.send(products);
    else
    res.status(404).send({msg: "Product Not Found."}) 
});*/
app.listen(5000, () => { console.log("Server started at http://localhost:5000")});

