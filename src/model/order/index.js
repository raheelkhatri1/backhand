const mongoose = require("mongoose")

const OrderSchma = new mongoose.Schema({
    titleName:{
        type: String,
        require:true,
    },
    mobileNumber: {
        type: Number,
        require:true,
    },
    colour:{
        type:String,
        require:true,
    },
    item:{
        type: Number,
        require:true
    },
    amount:{
        type:Number,
        require:true
    },
    SellerSKU:{
        type:String,
        
    }

},{ timestamps: true })

const Order = mongoose.model("order",OrderSchma)
module.exports = Order