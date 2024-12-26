const Order = require("./../../model/order/index")

const createOrder = async (req, res) => {
    const orderData = {
        titleName: "watch",
        mobileNumber: 3112598421,
        colour: "black",
        item: 1,
        amount: 450,
        SellerSKU: "1",        
    }
    try {
        const responseOrder = await Order.create(orderData)
        res.status(201).send({
            success:true,
            order : responseOrder,
        })
    } catch (error) {
        res.status(500).send({
            success:false,
            message:"Error creating order"
        })
    }
}

const deleteOrder = async (req,res)=>{
    try {
        const response= await Order.findByIdAndDelete("6765011255caca94044fd97f")
        res.send({success:true,message:"File deleted successfully",response})
    } catch (error) {
        res.send({success:false,message:error.message})
    }
}

const getOrder = async (req,res) =>{
    try {
        const response = await Order.findById("6765017cb76c8d911bced8f9")
        res.status(200).send({
            success:true,
            message:response,
        })
    } catch (error) {
        res.status(401).send({
            success:false,
            message:error.message
        })
    }
}

const updateOrder = async (req,res) =>{
    try {
        changeData = {
            amount:900
        }
        const getOrder = await Order.findById("676dbf8fae9055151db949ab")
        const response = await Order.findByIdAndUpdate(getOrder,changeData,{new:true})
        res.status(401).send({
            success:true,
            message:response,
        })
    } catch (error) {
        res.send({
            success:false,
            message:error?.message
        })
    }
}

const getOrderByKey = async (req,res) =>{
    try {
        const response = await Order.findOne({colour:"black"})
        res.status(200).send({
            success:true,
            message:response,
        })
    } catch (error) {
        res.status(401).send({
            success:false,
            message:error.message
        })
    }
}
const ByKeyAll = async (req,res) =>{
    try {
        const data = {
            colour: "green"
        }
        const id_ = await Order.findOne({colour:"black"})
        const response = await Order.findOneAndUpdate(id_,data,{new:true})
        res.status(200).send({
            success:true,
            message:response,
        })
    } catch (error) {
        res.status(401).send({
            success:false,
            message:error.message
        })
    }
}

const count = async (req,res) =>{
    try {
        const response = await Order.countDocuments()
        res.status(200).send({
            success:true,
            message:response,
        })
    } catch (error) {
        res.status(401).send({
            success:false,
            message:error.message
        })
    }
}
const deleteKey = async (req,res) =>{
    try {
        const response = await Order.findOneAndDelete({amount:900})
        res.status(200).send({
            success:true,
            message:response,
        })
    } catch (error) {
        res.status(401).send({
            success:false,
            message:error.message
        })
    }
}




module.exports = {
    createOrder,
    deleteOrder,
    getOrder,
    updateOrder,
    getOrderByKey,
    ByKeyAll,
    count,
    deleteKey,
}