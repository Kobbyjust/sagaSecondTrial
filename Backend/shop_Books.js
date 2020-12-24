import bcrypt from 'bcryptjs';
const data = {   

    users: [
        {  
            name: 'Sagamart',
            email: 'sagamart02@gmail.com',
            password: bcrypt.hashSync('123456789', 8),
            isAdmin: true
        },
        {
            name: 'John',
            email: 'john@gmail.com',
            password: bcrypt.hashSync('123456789', 8), 
            isAdmin: false
        },
    ],

    product:[
    {  
       
        type: 'Bd',
        name: 'xxxxxxx',
        image: '/img/1.png',
        price: '2000',
        countInStock:10,
        description:'Author: xxxxx publications'  
    }, 
    {
      
        type: 'Bd',
        name: 'xxxxxxx',
        image: '/img/1.png',
        price: '2000',
        countInStock:10,
        description:'Author: xxxxx publications' 
    } , 
    {
      
        type: 'Bd',
        name: 'xxxxxxx',
        image: '/img/1.png',
        price: '2000',
        countInStock:10,
        description:'Author: xxxxx publications' 
    }, 
    {
      
        type: 'Bd',
        name: 'xxxxxxx',
        image: '/img/1.png',
        price: '2000',
        countInStock:10,
        description:'Author: xxxxx publications' 
    }, 
],
order: [
    {
      
        address: 'P O Box 82 ',
    city: 'String, required: true',
 
    country:" {type: String, required: true}",
    }
],
}

export default data;
