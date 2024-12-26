const mongoose = require("mongoose")

mongoose.connect('mongodb+srv://khatriraheel725:03122828503rms@cluster0.llch4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then((data)=>{
    console.log("connect",data)
})
.catch((error)=>{
    console.log(error,"not connect")
})

