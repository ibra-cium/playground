import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors(
    {
        origin: "http://localhost:5173",
    }
));

app.get("/", (req, res) => {
    res.json({ name: "siyam" });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});