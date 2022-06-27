const mongoose = require("mongoose");
const DB = "mongodb+srv://sachin243:sachin243@cluster0.appv4dh.mongodb.net/mernstack?retryWrites=true&w=majority";

mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> console.log("connection start")).catch((error)=> console.log(error.message));