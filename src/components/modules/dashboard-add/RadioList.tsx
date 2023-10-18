interface Props {
  register: any;
  options: [string, string][];
}
const RadioList: React.FC<Props> = ({ register, options }) => {
  return (
    <div className=" mb-10">
      <p className=" text-lg mb-1">دسته بندی</p>
      <div className="flex">
        {options.map((item, index) => (
          <div
            key={`${index}${item[0]}`}
            className="flex items-center justify-evenly bg-meTrans text-meBlue ml-7 w-[70px] py-1 px-[6px] rounded-md cursor-pointer"
          >
            <label htmlFor={`cat-${item[0]}`}>{item[1]}</label>
            <input
              name="category"
              type="radio"
              {...register("category")}
              value={item[0]}
              id={`cat-${item[0]}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadioList;
