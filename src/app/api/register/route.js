{
  /*import connectDB from "@/utils/db";
import User from "@/models/user-model"
import { NextResponse } from "next/server";

export async function POST(req, res) {
    try {

        const body = await req.json();
        console.log(body);
        await connectDB();
        console.log("connected");

        await User.create(body);

        return NextResponse.json({
            message:"Message sent successfully!"
        }, {
            status: 200
        })

    }catch (e) {
        return NextResponse.json(
            { message: e },
            { status: 500 }
        )
    }
} */
}

import connectDB from "@/utils/db";
import User from "@/models/user-model";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(req, res) {
    try {
        const { name, email, password } = await req.json();
        console.log(name, email, password);

        // Check if name, email, and password are provided
        if (!name || !email || !password) {
            return NextResponse.json({
                message: "All Fields are Mandatory !"
            }, {
                status: 400
            });
        }

        await connectDB();
        console.log("connected");

        // Check if the email already exists in the database
        const emailExists = await User.findOne({ email });
        if (emailExists) {
            return NextResponse.json({
                message: "User already Registered !"
            }, {
                status: 400
            });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user with hashed password
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
        });

        // Save the new user to the database
        const result = await newUser.save();

        // Generate JWT token
        const token = jwt.sign({ token: result._id }, "CODE_UR", {
            expiresIn: "30d",
        });

        return NextResponse.json({
            message: "User created successfully!",
            token // You might want to send the token back to the client for further authentication
        }, {
            status: 200
        });

    } catch (e) {
        return NextResponse.json(
            { message: e },
            { status: 500 }
        );
    }
}
