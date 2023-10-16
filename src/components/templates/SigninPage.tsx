"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";

type Inputs = {
  email: string;
  password: string;
};

const SigninPage = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<Inputs>();

  const submit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });
    setLoading(false);
    if (!res) {
      toast.error("مشکل در پرداخت درخواست ");
      return;
    }
    if (res.error) {
      toast.error(res.error);
    } else {
      toast.success("ورود با موفقیت");
      router.replace("/");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-[90vh]">
      <h4 className=" text-meBlue font-semibold text-3xl mb-5">فرم ثبت نام</h4>
      <form
        onSubmit={handleSubmit(submit)}
        className="flex flex-col max-w-[700px] shadow-md shadow-meBlue border-2 border-solid border-meBlue p-10 rounded-xl mb-8"
      >
        <label className="text-meBlue mb-3 font-normal">ایمیل</label>
        <input
          {...register("email", {
            required: "ایمیل خود را وارد کنید",
          })}
          type="text"
          className={` ${
            errors.email ? "mb-1" : "mb-10"
          } w-64 border border-meBlue border-dashed text-gray-500 rounded-md p-3 text-left text-base h-10 focus:border-solid`}
        />
        {errors.email && (
          <span className=" text-red-600 mb-3 text-sm">
            {errors.email.message}
          </span>
        )}
        <label className="text-meBlue mb-3 font-normal">رمز عبور</label>
        <input
          {...register("password", {
            required: "رمز عبور خود را وارد کنید",
          })}
          type="password"
          className={` ${
            errors.password ? "mb-1" : "mb-10"
          } w-64 border border-meBlue border-dashed text-gray-500 rounded-md p-3 text-left text-base h-10 focus:border-solid`}
        />
        {errors.password && (
          <span className=" text-red-600 mb-3 text-sm">
            {errors.password.message}
          </span>
        )}

        {loading ? (
          <ThreeDots
            height={45}
            color="#304ffe"
            ariaLabel="three-dots-loading"
            wrapperStyle={{ margin: "auto" }}
            visible={true}
          />
        ) : (
          <button
            type="submit"
            className="boder-none bg-meBlue text-white text-xl font-normal rounded-md transition-all ease-in duration-100 cursor-pointer py-2 px-0 hover:scale-105"
          >
            ثبت نام
          </button>
        )}
        {/* <button
          type="submit"
          className="boder-none bg-meBlue text-white text-xl font-normal rounded-md transition-all ease-in duration-100 cursor-pointer py-2 px-0 hover:scale-105"
        >
          ثبت نام
        </button> */}
      </form>
      <p className="text-gray-400 text-lg">
        حساب کاربری دارید ؟
        <Link
          href="/signin"
          className="text-meBlue mr-3 border-b-2 border-solid border-gray-400"
        >
          ورود
        </Link>
      </p>
      <Toaster />
      {/* <DevTool control={control} /> */}
    </div>
  );
};

export default SigninPage;
