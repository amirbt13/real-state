import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { Types } from "mongoose";
import connectDB from "@/utils/api/connectDB";
import User from "@/models/User";
import Profile from "@/models/Profile";

export async function POST(req: Request) {
  try {
    await connectDB();

    const {
      title,
      description,
      location,
      phone,
      price,
      realState,
      construction,
      category,
      rules,
      amenities,
    } = await req.json();

    const session = await getServerSession({});
    if (!session) {
      return NextResponse.json(
        { error: "وارد حساب کاربری خود شوید" },
        { status: 401 }
      );
    }

    const user = await User.findOne({ email: session.user?.email });
    if (!user) {
      return NextResponse.json(
        { error: "حساب کاربری یافت نشد" },
        { status: 404 }
      );
    }

    if (
      !title ||
      !description ||
      !location ||
      !phone ||
      !price ||
      !realState ||
      !construction ||
      !category ||
      !rules ||
      !amenities
    ) {
      return NextResponse.json(
        { error: "اطلاعات نامعتبر است" },
        { status: 400 }
      );
    }

    const newProfile = await Profile.create({
      title,
      description,
      location,
      phone,
      price: +price,
      realState,
      construction,
      category,
      rules,
      amenities,
      userId: new Types.ObjectId(user._id),
    });

    console.log(newProfile);
    return NextResponse.json(
      { message: "آگهی جدید ساخته شد" },
      { status: 201 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "خطا در سمت سرور رخ داد" },
      { status: 500 }
    );
  }
}
