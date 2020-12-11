import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  
    address: {type: String, },
    city: {type: String, },
    country: {type: String, }, 
    name:  {type: String, },
    email:  {type: String, },
    city:   {type: String, },
    payment:  {type: String, },
    itemName:  {type: String, },
    itemQty:  {type: String, },
    itemPrice:  {type: Number, },

    /* orderItems: [{
        name: {type: String, },  
        qty: {type: Number, },
       // image: {type: String, },
        price: {type: Number , },
        product: {type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
    ,   
},
    },  
],

shippingAddress:{
    address: {type: String, },
    city: {type: String, },
   postalCode: {type: String, },
    country: {type: String, },
},
paymentMethod: {type: String},
itemsPrice: {type: String, },
    shippingPrice: {type: String, },
   taxPrice: {type: String, },
    totalPrice: {type: String, },
    user: {type: mongoose.Schema.Types.ObjectId, ref:'User', },
isPaid: {type: Boolean, default: false},
paidAt: {type: Date},
isDelivered: {type: Boolean, default: false},
deliveredAt: {type: Date},*/
},  
{
    timestamps: true,
}

);

const Order = mongoose.model('Order', orderSchema);
export default Order;