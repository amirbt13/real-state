import React from "react";

const Footer = () => {
  return (
    <footer
      className={`flex justify-between p-5 mt-20 mb-5 rounded-lg bg-meBlue text-white`}
    >
      <div className={` w-[70%] text-justify ml-7`}>
        <h3 className={` font-semibold text-[1.4rem] mb-2`}>
          سامانه خرید و اجاره ملک
        </h3>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه
        </p>
      </div>
      <div>
        <ul>
          <li>تعرفه قانونی</li>
          <li>دسترسی سریع</li>
          <li>مشاورین خبره</li>
          <li>قولنامه محضری</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
