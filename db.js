const mongoose = require("mongoose");

module.exports = () =>{
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedtopology:true,
        }
    try {
        mongoose.connect(process.env.MONGO_URI,connectionParams)
        console.log("Connected to database successfully");
    } catch (error) {
        
    }
}