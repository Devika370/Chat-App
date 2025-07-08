import mongoose from "mongoose";

const connectToMongodb = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_URI_DB);
        console.log("Connected to MongoDB");
    }catch(error){
        console.log("Error connecting to MongoDB");
    }
    
}

export default connectToMongodb;