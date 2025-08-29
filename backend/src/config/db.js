import mangose from 'mongoose';

export const connectDB = async () => {
    try {
        mangose.connect(process.env.MONGO_URI)
        console.log("MANGODB CONNECTED SUCCESSFULLY");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}