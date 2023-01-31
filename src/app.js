const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const db = require('./utils/database');
const authRoutes = require('./routes/auth.routes');
const productRoutes = require('./routes/product.routes');
const cartRoutes = require('./routes/cart.routes');
const orderRoutes = require('./routes/order.routes');


const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));


// db.authenticate()
//   .then(()=>console.log('Base de datos autenticada'))
//   .catch((error)=>console.log(error));

// db.sync({force: false})
//   .then(()=> console.log('Base de datos sincronizada'))
//   .catch((error)=> console.log(error));

app.get('/', (req, res)=>{
  res.json({message: 'Welcome to my server'});
});

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/product', productRoutes);
app.use('/api/v1/cart', cartRoutes);
app.use('/api/v1/order', orderRoutes);



module.exports = app;