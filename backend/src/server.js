import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { ENV } from "./config/env.js";
import path from "path";
import { dbConnect } from "./config/dbcon.js";
dotenv.config();
const app = express();
const PORT = ENV.PORT || 3000;
const __dirname = path.resolve();
app.use(cors(
    {
        origin: "http://localhost:5173",
    }
));
// API routes MUST come before the wildcard
app.get("/api", (req, res) => {
    res.json({ name: "Ibrahim", age: 22 });
});

// Catch-all for production (must be LAST)
if (ENV.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")));
    app.get("/{*any}", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
    });
}

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    dbConnect();
    console.log(ENV.DATA_BASE_URL);
});