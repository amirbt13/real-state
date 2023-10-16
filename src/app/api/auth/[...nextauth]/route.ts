import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/User";
import { verifyPassword } from "@/utils/api/auth";
import connectDB from "@/utils/api/connectDB";

interface CustomCredentials {
  email: string;
  password: string;
}

const authOptions: NextAuthOptions = {
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      credentials: {},
      authorize: async (credentials, req) => {
        const { email, password } = credentials as CustomCredentials;

        try {
          await connectDB();
        } catch (err) {
          console.log(err);
          throw new Error("مشکل در سمت سرور");
        }

        if (!email || !password) {
          throw new Error("اطلاعات نامعتبر است");
        }

        const user = await User.findOne({ email });

        if (!user) throw new Error("لطفا حساب کاربری ایجاد کنید");

        const isValid = await verifyPassword(password, user.password);

        if (!isValid) throw new Error("ایمیل یا رمز عبور اشتباه است");

        return user;
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
