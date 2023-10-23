import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  name: string;
}

const CategoryCard: React.FC<Props> = ({ title, name }) => {
  return (
    <div className=" shadow-lg shadow-[#304ffe4a] rounded-2xl overflow-hidden p-3 transition-all ease-in duration-100 my-2 hover:-rotate-6">
      <Link href={"/"}>
        <Image
          className=" rounded-xl"
          src={`/images/${name}.png`}
          alt={name}
          width={240}
          height={144}
          priority={true}
        />
        <p className=" text-[1.2rem] font-normal text-meBlue text-center mt-2 mb-1">
          {title}
        </p>
      </Link>
    </div>
  );
};

export default CategoryCard;
