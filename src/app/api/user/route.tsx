import User from "@/models/User";
import connectDB from "@/utils/api/connectDB";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    await connectDB();
    const session = await getServerSession({});

    if (!session) {
      return NextResponse.json(
        { error: "لطفا وارد حساب کاربری خود شوید" },
        { status: 401 }
      );
    }
    const user = await User.findOne({ email: session.user?.email }).select([
      "email",
      "role",
    ]);

    if (!user) {
      return NextResponse.json(
        { error: "حساب کاربری یافت نشد" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { user: { email: user.email, role: +user.role } },
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "مشکلی در سمت سرور پیش آمده است" },
      { status: 500 }
    );
  }
}
