import { connectionstr } from "@/utils/db";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  console.log("running");
  await mongoose.connect(connectionstr);
  console.log("connected");

    return NextResponse.json({result:true})
  }