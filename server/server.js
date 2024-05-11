import express from 'express'
import mongoose from 'mongoose'
import env from 'dotenv'
import userRoutes from './routes/user.routes.js'
env.config();

mongoose.connect(process.env.MONGO_LINK).then(() => {
    console.log("Connected to MongoDB")
}).catch((err) => {
    console.log(err)
})

const app = express();
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});


app.use("/api/user", userRoutes);