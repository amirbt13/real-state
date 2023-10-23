import Profile from "@/models/Profile";
import User from "@/models/User";
import connectDB from "@/utils/api/connectDB";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { profileId: string } }
) {
  try {
    await connectDB();
    const id = params.profileId;
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
    const profile = await Profile.findOne({ _id: id });
    if (!profile) {
      return NextResponse.json(
        { error: "آگهی مورد نظر یافت نشد" },
        { status: 404 }
      );
    }

    return NextResponse.json({ profile: profile }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "خطا در سمت سرور رخ داد" },
      { status: 500 }
    );
  }
}
