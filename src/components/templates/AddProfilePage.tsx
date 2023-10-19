"use client";
import TextInput from "@/elements/TextInput";
import { useForm, SubmitHandler, useFieldArray } from "react-hook-form";
import { p2e } from "@/utils/replaceNumbers";
import RadioList from "@/modules/dashboard-add/RadioList";
import TextList from "@/modules/dashboard-add/TextList";
import { Profile } from "src/types/Profile";
import CustomDatePicker from "@/modules/dashboard-add/CustomDatePicker";
import { useState } from "react";
import { Value } from "react-multi-date-picker";

const AddProfilePage = () => {
  const {
    register,
    handleSubmit,
    control,
    getValues,
    formState: { errors },
  } = useForm<Profile>({
    defaultValues: {
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
  const [submitedDate, setSubmitedDate] = useState<Value>();
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

  const submit: SubmitHandler<Profile> = (data) => {
    // console.log(typeof data);
    data.construction = new Date(data.construction);
    const p2eDataArr = Object.entries(data).map((item) => {
      if (typeof item[1] === "string" || typeof item[1] === "number") {
        return [item[0], p2e(item[1])];
      }
      return item;
    });
    const p2eData = Object.fromEntries(p2eDataArr);
    console.log(p2eData);
  };
  return (
    <div className="flex flex-col mb-36">
      <h3 className=" text-2xl font-normal mb-20 w-full bg-meTrans text-meBlue rounded-lg py-3 px-4">
        ثبت آگهی
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
          type="text"
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
        <input
          type="submit"
          value={"ثبت آگهی"}
          className="bg-meBlue w-full text-white font-normal rounded-md transition-all ease-in duration-100 cursor-pointer p-3 hover:scale-105"
        />
      </form>
    </div>
  );
};

export default AddProfilePage;
