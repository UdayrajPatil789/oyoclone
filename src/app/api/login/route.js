import connectDB from "@/utils/db";
import User from "@/models/user-model";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(req, res) {
  try {
    const { email, password } = await req.json();
    console.log(email, password);

    // Check if name, email, and password are provided
    if (!email || !password) {
      return NextResponse.json(
        {
          message: "All Fields are Mandatory !",
        },
        {
          status: 400,
        }
      );
    }

    await connectDB();
    console.log("connected");

    // Check if the email already exists in the database
    const emailExists = await User.findOne({ email });
    if (!emailExists) {
      return NextResponse.json(
        {
          message: " Register First !",
        },
        {
          status: 400,
        }
      );
    }

    const passwordMatched = await bcrypt.compare(
      password,
      emailExists.password
    );
    console.log(passwordMatched);
    if (passwordMatched) {
      const token = jwt.sign({ token: emailExists._id }, "CODE_UR", {
        expiresIn: "30d",
      });
      console.log(token);

      return NextResponse.json({ msg: "Logged in successfully !", token });
    }

    return NextResponse.json({ msg: "Invalid Credentitials !" });
  } catch (e) {
    return NextResponse.json({ message: e }, { status: 500 });
  }
}
