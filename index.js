const express = require("express")
const app = express()
const User = require("./src/model/user/index")
const Data = require("./config/databass")
const Order = require("./src/model/order/index")
const { createOrder, deleteOrder, getOrder, updateOrder, getOrderByKey, ByKeyAll, count, deleteKey } = require("./src/controller/order")
const { createUser } = require("./src/controller/user")


app.post("/", createUser)

app.post("/order", createOrder)

// app.delete("/order", deleteOrder)

// app.get("/order", getOrder)

// app.put("/order", updateOrder)

// app.get("/order", getOrderByKey)

app.put("/order", ByKeyAll)

app.get("/order",count)

app.delete("/order", deleteKey)

app.listen(3000, () => {
    console.log("server.....")
})