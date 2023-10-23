import Profile from "@/models/Profile";
import connectDB from "@/utils/api/connectDB";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    await connectDB();
    const profiles = await Profile.find().select("-userId");
    return NextResponse.json({ profiles }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "خطا در سمت سرور رخ داد" },
      { status: 500 }
    );
  }
}
