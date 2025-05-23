const Product = require('../models/product.model.js');

const getProducts = async (req,res) => {
    try{
        const product = await Product.find({});
        res.status(200).json(product);
    } catch (error){
        res.status(500).json({message: error.message})
    }
    
};

const getProduct = async (req,res) => {
    try{
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error){
        res.status(500).json({message: error.message})
    }
    
};

const postProduct = async (req,res) => {
    try{
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error){
        res.status(500).json({message: error.message})
    }
    
};


//update
const putProduct = async (req,res) => {
    try{
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if (!product){
            return res.status(404).json({message: "product not found"});
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
    } catch (error){
        res.status(500).json({message: error.message})
    }
    
};

//delete
const deleteProduct = async (req,res) => {
    try{
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id, req.body);
        if (!product){
            return res.status(404).json({message: "product not found"});
        }
        // const updatedProduct = await Product.findById(id);
        res.status(200).json({message: "product deleted successfully"});
    } catch (error){
        res.status(500).json({message: error.message})
    }
    
};

module.exports = {
    getProducts, getProduct, postProduct, putProduct, deleteProduct
};