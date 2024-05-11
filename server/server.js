import express from 'express'
import mongoose from 'mongoose'
import env from 'dotenv'
import userRoutes from './routes/user.routes.js'
import authRouter from './routes/auth.router.js';
env.config();

const app = express();
const PORT = 5000;

mongoose.connect(process.env.MONGO_LINK).then(() => {
    console.log("Connected to MongoDB")
}).catch((err) => {
    console.log(err)
});

app.use(express.json())

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});


app.use("/api/user", userRoutes);

app.use("/api/auth", authRouter)

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal server Error';
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode
    })
})