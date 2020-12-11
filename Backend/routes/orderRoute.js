import express from 'express'
import expressAsyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js';
import { isAuth } from '../util.js';
import shop_Books from '../shop_Books';

const orderRouter = express.Router();

 
orderRouter.get("/seed", expressAsyncHandler(async (req, res) =>
{
    await Order.remove({});
    const costumerOrder = await Order.insertMany(shop_Books.order)
    res.send({costumerOrder});
}));
 
orderRouter.post('/order', async(req, res) => {  
    const order = new Order({
        address: req.body.address,
        city: req.body.city,
        country: req.body.country,
        name: req.body.name,
        email: req.body.email,
        payment: req.body.payment,
        itemName: req.body.itemName,
        itemQty: req.body.itemQty,
        itemPrice: req.body.itemPrice
       
    });
        const customerOrder = await order.save();
          
            res.send({
            _id: customerOrder.id,
            address: customerOrder.address, 
             city: customerOrder.city,
             name: customerOrder.name,
        email: customerOrder.email,
        payment: customerOrder.payment,
        itemName: customerOrder.itemName,
        itemQty: customerOrder.itemQty,
        itemPrice: customerOrder.itemPrice,
            country: customerOrder.country  
        })
    
    })  
 
  orderRouter.get('/order',async(req, res) => {
    const costumerOrder = await Order.find({});
    res.send(costumerOrder);
   /* if(costumerOrder){
        res.send({

            city: customerOrder.city,
            address: customerOrder.address,
            country: customerOrder.country,
        });
    }*/
   
  } )  
/*orderRouter.post('/',
isAuth,
expressAsyncHandler(async(req, res) =>
{
    if(req.body.orderItems.length === 0){
       res.status(400).send({message: 'Cart is Empty'}); 
    }
    else{
        const order = new Order({
           orderItems: req.body.orderItems,
           shippingAddress: req.body.shippingAddress,  
           paymentMenthod: req.body.paymentMenthod,
           itemsPrice: req.body.itemsPrice,
           shippingPrice: req.body.shippingPrice,
           taxprice: req.body.taxprice,
           totalprice: req.body.totalprice,
            user: req.user._id
        });
        const createdOrder = await order.save();
        res.status(201).send({message: 'New Order Creaated', order: createdOrder});
    }
}
))*/

export default orderRouter;
