import mongoose from "mongoose"
import { ENV } from "./env.js";

export const dbConnect = async () => {
    try {
        await mongoose.connect(ENV.DATA_BASE_URL);
        console.log("Database connected");
    } catch (error) {
        console.log(error);
    }
}