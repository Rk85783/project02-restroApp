import { connectionStr } from "@/app/lib/db";
import { restaurantSchema } from "@/app/lib/restaurantModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  console.log(connectionStr);
  await mongoose.connect(connectionStr);
  const data = await restaurantSchema.find();
  console.log(data);
  return NextResponse.json({ result: data });
}

export async function POST(request) {
  const payload = await request.json();
  console.log(payload);
  await mongoose.connect(connectionStr);
  let restaurant = new restaurantSchema(payload);
  const result = await restaurant.save();
  return NextResponse.json({ result, success: true });
}
