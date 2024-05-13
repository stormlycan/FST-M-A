import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs'
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken'

export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;
    const hashPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashPassword });
    try {
        await newUser.save();
        res.status(201).json({
            message: "User created succefully"
        })
    } catch (error) {
        next(errorHandler(300, error.message));
    }
}

export const signin = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const validUser = await User.findOne({ email })
        if (!validUser) {
            return next(errorHandler(404, "user not found"));
        }
        const validPassword = await bcryptjs.compare(password, validUser.password);
        if (!validPassword) {
            return next(errorHandler(401, "Invalid credentials"));
        };
        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET, { expiresIn: "2h" });
        const { password: hashedPassword, ...rest } = validUser._doc;
        const expiryData = new Date(Date.now() + 2 * 60 * 60 * 1000)
        res.cookie('access_token', token, { httpOnly: true, expires: expiryData })
            .status(200).json(rest);
    } catch (error) {
        next(errorHandler(300, error.message));
    }
}