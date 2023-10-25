"use client";
import TextInput from "@/elements/TextInput";
import { useForm, SubmitHandler, useFieldArray } from "react-hook-form";
import { p2e } from "@/utils/replaceNumbers";
import RadioList from "@/modules/dashboard-add/RadioList";
import TextList from "@/modules/dashboard-add/TextList";
import { Profile } from "src/types/Profile";
import CustomDatePicker from "@/modules/dashboard-add/CustomDatePicker";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import Loader from "@/elements/Loader";
import { useRouter } from "next/navigation";

interface Props {
  profile?: Profile;
  id?: string;
}

const AddProfilePage: React.FC<Props> = ({ profile, id }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Profile>({
    defaultValues: profile || {
      title: "",
      description: "",
      location: "",
      phone: "",
      price: "",
      realState: "",
      construction: new Date(),
      category: "",
      rules: [],
      amenities: [],
    },
  });

  const {
    fields: ruleFields,
    append: appendRule,
    remove: removeRule,
  } = useFieldArray({
    control: control,
    name: "rules",
  });
  const {
    fields: amenitiesFields,
    append: appendAmenity,
    remove: removeAmenity,
  } = useFieldArray({
    name: "amenities",
    control,
  });

  const prepareData = (data: Profile) => {
    data.construction = new Date(data.construction);
    const p2eDataArr = Object.entries(data).map((item) => {
      if (typeof item[1] === "string" || typeof item[1] === "number") {
        return [item[0], p2e(item[1])];
      }
      return item;
    });
    const p2eData = Object.fromEntries(p2eDataArr);
    return p2eData;
  };

  const submit: SubmitHandler<Profile> = async (data) => {
    setLoading(true);
    const finalForm = prepareData(data);
    if (!profile) {
      // adding a new profile
      const res = await fetch("/api/myprofile", {
        method: "POST",
        body: JSON.stringify(finalForm),
        headers: { "Content-Type": "application/json" },
      });
      const resData = await res.json();
      setLoading(false);
      if (res.status === 201) {
        toast.success(resData.message);
        router.refresh();
      } else {
        toast.error(resData.error);
      }
    } else {
      // edit an existing profile
      const res = await fetch(`/api/myprofile`, {
        method: "PATCH",
        body: JSON.stringify({
          ...finalForm,
          _id: id,
        }),
        headers: { "Content-Type": "application/json" },
      });
      const resData = await res.json();
      setLoading(false);
      if (res.status === 200) {
        toast.success(resData.message);
        router.refresh();
      } else {
        toast.error(resData.error);
      }
    }
  };

  return (
    <div className="flex flex-col mb-36">
      <h3 className=" text-2xl font-normal mb-20 w-full bg-meTrans text-meBlue rounded-lg py-3 px-4">
        {profile ? "ویرایش آگهی" : "ثبت آگهی"}
      </h3>
      <form onSubmit={handleSubmit(submit)}>
        <TextInput
          title={"عنوان آگهی"}
          name={"title"}
          type="text"
          errors={errors}
          register={register}
          requaredMsg="عنوان آگهی را وارد کنید"
        />
        <TextInput
          title="توضیحات"
          name="description"
          type="text"
          errors={errors}
          register={register}
          textarea={true}
        />
        <TextInput
          title="آدرس"
          name="location"
          type="text"
          errors={errors}
          register={register}
          requaredMsg="آدرس را وارد کنید"
        />
        <TextInput
          title="شماره تماس"
          name="phone"
          type="text"
          errors={errors}
          register={register}
          requaredMsg="شماره تماس را وارد کنید"
        />
        <TextInput
          title="قیمت(تومان)"
          name="price"
          type="number"
          errors={errors}
          register={register}
          requaredMsg="قیمت را وارد کنید"
        />

        <TextInput
          title="بنگاه"
          name="realState"
          type="text"
          errors={errors}
          register={register}
        />
        <RadioList
          register={register}
          options={[
            ["apartment", "آپارتمان"],
            ["villa", "ویلا"],
            ["store", "مغازه"],
            ["office", "دفتر"],
          ]}
        />
        <TextList
          register={register}
          name="rules"
          pName="قوانین"
          append={appendRule}
          remove={removeRule}
          fields={ruleFields}
        />
        <TextList
          register={register}
          name="amenities"
          pName="امکانات رفاهی"
          append={appendAmenity}
          remove={removeAmenity}
          fields={amenitiesFields}
        />
        <CustomDatePicker control={control} />
        {loading ? (
          <Loader color="#304ffe" />
        ) : (
          <input
            type="submit"
            value={profile ? "ویرایش آگهی" : "ثبت آگهی"}
            className="bg-meBlue w-full text-white font-normal rounded-md transition-all ease-in duration-100 cursor-pointer p-3 hover:scale-105"
          />
        )}
      </form>
      <Toaster />
    </div>
  );
};

export default AddProfilePage;
