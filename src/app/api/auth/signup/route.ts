import { NextResponse } from "next/server";
import User from "@/models/User";
import connectDB from "@/utils/api/connectDB";
import { hashPassword } from "@/utils/api/auth";

export async function POST(req: Request) {
  try {
    await connectDB();

    const { email, password } = await req.json();
    // console.log({ email, password });
    if (!email || !password) {
      return NextResponse.json(
        { error: "اطلاعات نامعتبر است" },
        { status: 422 }
      );
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "حساب کاربری از قبل وجود دارد" },
        { status: 422 }
      );
    }

    const hashedPassword = await hashPassword(password);
    console.log(typeof hashedPassword);
    const newUser = await User.create({ email, password: hashedPassword });
    // console.log(newUser);

    return NextResponse.json(
      { message: "حساب کاربری ایجاد شد" },
      { status: 201 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: "مشکل سمت سرور" }, { status: 500 });
  }
}
