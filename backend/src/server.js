import express from 'express';
import cors from "cors"
import dotenv from 'dotenv';

import notesRoutes from './routes/notesRoutes.js';
import { connectDB } from './config/db.js';
import rateLimiter from './middleware/ratetLimiter.js';

dotenv.config();

const app = express()
const PORT = process.env.PORT || 5000;

//middleware
app.use(cors({
    origin: "http://localhost:5173",
}));
app.use(express.json());
app.use(rateLimiter);

// app.use((req, res, next) => {
//     console.log(`Req method is ${req.method} & Req URL. is ${req.url}`);
//     next();
// });

app.use("/api/notes", notesRoutes);

connectDB().then(() => {
    app.listen(PORT, () =>{
        console.log("Server is running on PORT:", PORT);
    })
})

 