import mongoose from "mongoose"

const connectDb = async () => {
    try {
        
        console.log("Your current URI is:", process.env.MONGO_URI);
        
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    }
    catch(error){
        console.error("Error connecting to mongo db:", error.message);
        process.exit(1);
    }
}
export default connectDb