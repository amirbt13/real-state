import User from "@/models/User";
import connectDB from "@/utils/api/connectDB";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET(req: Request, res: Response) {
  try {
    await connectDB();
    const session = await getServerSession(authOptions);
    // console.log(session);
    if (!session) {
      return NextResponse.json({ error: "لطفا وارد حساب کاربری خود شوید" });
    }

    const user = await User.aggregate([
      { $match: { email: session.user?.email } },
      {
        $lookup: {
          from: "profiles",
          foreignField: "userId",
          localField: "_id",
          as: "profiles",
        },
      },
    ]);

    const profiles = user[0].profiles;
    return NextResponse.json({ profiles }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: "خطا در سمت سرور" });
  }
}
