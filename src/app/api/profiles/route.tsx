import Profile from "@/models/Profile";
import connectDB from "@/utils/api/connectDB";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const search = req.nextUrl.searchParams;
    const category: string | null = search.get("category");

    await connectDB();
    if (!category) {
      const profiles = await Profile.find().select("-userId");
      return NextResponse.json({ profiles }, { status: 200 });
    } else {
      const profiles = await Profile.find({ category }).select("-userId");

      return NextResponse.json({ profiles }, { status: 200 });
    }
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "خطا در سمت سرور رخ داد" },
      { status: 500 }
    );
  }
}
