require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js');
const app = express();

//middleware
app.use(express.json());

//routes
app.use("/api/products", productRoute);

app.get('/', (req, res)=>{
    res.send("baqi saying assalamu alaikum wa rahmatullah");
});

// app.get('/api/products', async (req,res) => {
//     try{
//         const product = await Product.find({});
//         res.status(200).json(product);
//     } catch (error){
//         res.status(500).json({message: error.message})
//     }
    
// });

// app.get('/api/products/:id', async (req,res) => {
//     try{
//         const {id} = req.params;
//         const product = await Product.findById(id);
//         res.status(200).json(product);
//     } catch (error){
//         res.status(500).json({message: error.message})
//     }
    
// });

// app.post('/api/products', async (req,res) => {
//     try{
//         const product = await Product.create(req.body);
//         res.status(200).json(product);
//     } catch (error){
//         res.status(500).json({message: error.message})
//     }
    
// });


// //update
// app.put('/api/products/:id', async (req,res) => {
//     try{
//         const {id} = req.params;
//         const product = await Product.findByIdAndUpdate(id, req.body);
//         if (!product){
//             return res.status(404).json({message: "product not found"});
//         }
//         const updatedProduct = await Product.findById(id);
//         res.status(200).json(updatedProduct);
//     } catch (error){
//         res.status(500).json({message: error.message})
//     }
    
// });

// //delete
// app.delete('/api/products/:id', async (req,res) => {
//     try{
//         const {id} = req.params;
//         const product = await Product.findByIdAndDelete(id, req.body);
//         if (!product){
//             return res.status(404).json({message: "product not found"});
//         }
//         // const updatedProduct = await Product.findById(id);
//         res.status(200).json({message: "product deleted successfully"});
//     } catch (error){
//         res.status(500).json({message: error.message})
//     }
    
// });

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("connected to db");
    app.listen(3000, ()=>{
        console.log("server running on port 3000");
    });
})
.catch(()=>{
    console.log("connection failed!")
})
