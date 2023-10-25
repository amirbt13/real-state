import Profile from "@/models/Profile";
import connectDB from "@/utils/api/connectDB";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { profileId: string } }
) {
  try {
    const { profileId } = params;
    await connectDB();

    const profile = await Profile.findOne({ _id: profileId }).select("-userId");

    if (!profile) {
      return NextResponse.json(
        { error: "آگهی مورد نظر یافت نشد" },
        { status: 404 }
      );
    }

    return NextResponse.json({ profile }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "خطا در سمت سرور رخ داد" },
      { status: 500 }
    );
  }
}
