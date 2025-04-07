const mongoose = require("mongoose")

const ConnectDatabase = async ()=>{
    mongoose.connect(process.env.MONGODB_URL).then(()=>{
        console.log("MongoDB Database Connected ");
    });
}

module.exports = ConnectDatabase;