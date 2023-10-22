import { priceFormatter } from "@/utils/priceFormatter";

interface Props {
  title: string;
  name: string;
  type: string;
  register: any;
  errors: any;

  requaredMsg?: string | boolean;
  textarea?: boolean;
}

const TextInput: React.FC<Props> = ({
  title,
  name,
  type,
  register,
  errors,

  requaredMsg = false,
  textarea = false,
}) => {
  return (
    <div>
      <p className="text-[1.1rem] mb-[5px] ">{title}</p>

      {textarea ? (
        <>
          <textarea
            {...register(name, { required: requaredMsg })}
            className=" mb-10 w-80 border-dashed border border-meBlue text-gray-600 rounded-md p-3 text-base h-24 focus:border-solid focus:outline-none"
          />
          {errors[name] ? <span>{errors[name].message}</span> : null}
        </>
      ) : (
        <div className="flex flex-col mb-10">
          <input
            type={type}
            {...register(name, { required: requaredMsg })}
            className="  w-80 border-dashed border border-meBlue text-gray-600 rounded-md p-3 text-base h-10 focus:border-solid focus:outline-none"
          />
          {errors[name] ? (
            <span className=" text-red-600 mt-1">{errors[name].message}</span>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default TextInput;
