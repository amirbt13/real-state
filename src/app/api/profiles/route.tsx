import Profile from "@/models/Profile";
import connectDB from "@/utils/api/connectDB";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const search = req.nextUrl.searchParams;
    console.log(search);
    const category: string | null = search.get("category");
    const isPublished: string | null = search.get("isPublished");

    await connectDB();

    if (!category) {
      const profiles = await Profile.find({
        isPublished: !!isPublished,
      }).select("-userId");
      return NextResponse.json({ profiles }, { status: 200 });
    }

    if (
      category !== "villa" &&
      category !== "apartment" &&
      category !== "store" &&
      category !== "office"
    ) {
      return NextResponse.json(
        { error: "دسته بندی مورد نظر وجود ندارد" },
        { status: 404 }
      );
    }
    const profiles = await Profile.find({ category }).select("-userId");

    return NextResponse.json({ profiles }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "خطا در سمت سرور رخ داد" },
      { status: 500 }
    );
  }
}
