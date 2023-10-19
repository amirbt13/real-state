import { UseFieldArrayAppend, UseFieldArrayRemove } from "react-hook-form";
import { AiOutlineDelete } from "react-icons/ai";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { Profile } from "src/types/Profile";

interface Props {
  fields: Record<"id", string>[];
  remove: UseFieldArrayRemove;
  append: UseFieldArrayAppend<Profile, never>;
  register: any;
  name: string;
  pName: string;
}

const TextList: React.FC<Props> = ({
  fields,
  remove,
  append,
  register,
  name,
  pName,
}) => {
  return (
    <div className=" mb-10">
      <p className=" text-lg mb-1">{pName}</p>
      {fields &&
        fields.map((item, index) => (
          <div className="flex my-4 mx-0" key={index}>
            <input
              className=" w-80 border border-meBlue border-dashed text-gray-600 rounded-md p-3 text-base h-8 ml-3 focus:border-solid focus:outline-none"
              key={item.id}
              {...register(`${name}.${index}` as const)}
            />
            <button
              className=" m-0 text-[#db0505] bg-white border border-[#db0505] border-solid flex items-center leading-3 p-1 rounded"
              onClick={() => remove(index)}
            >
              حذف
              <AiOutlineDelete className=" mr-1 text-xl" />
            </button>
          </div>
        ))}
      <button
        className=" bg-meBlue text-white text-base rounded-md transition-all ease-in duration-100 cursor-pointer py-1 px-2 flex mt-5 hover:scale-105"
        onClick={() => append("")}
      >
        افزودن
        <MdOutlineLibraryAdd className=" mr-1 text-xl" />
      </button>
    </div>
  );
};

export default TextList;
