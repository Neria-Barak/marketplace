import mongoose from 'mongoose';

export class DBConnection {
    private static connected = false;

    static async connectDB() {
        if (this.connected === true) return;
        this.connected = true;
        
        const uri = process.env.MONGO_URI;
    
        if (uri === undefined) {
            throw new Error("MONGO_URI is not defined.");
        }
    
        try {
            await mongoose.connect(uri);
            console.log("MongoDB connected.");
        } catch (err) {
            console.error("MongoDB connection error:");
            throw err;
        }
    }
}
