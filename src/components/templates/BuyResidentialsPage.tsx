import Card from "@/modules/Card";
import Sidebar from "@/modules/Sidebar";
import { BProfile } from "src/types/Profile";

interface Props {
  data: { profiles: BProfile[] } | { error: string };
}

const BuyResidentialsPage: React.FC<Props> = ({ data }) => {
  return (
    <div className="flex justify-between mt-20">
      <div className="@sideBar@ flex flex-col items-center h-fit py-8 px-4 rounded-xl shadow-md shadow-[#304ffe4a] ml-10 w-[220px]">
        <Sidebar />
      </div>
      <div className="@main@ w-full grid grid-cols-3 justify-items-stretch">
        {"error" in data ? <h1>{data.error}</h1> : null}
        {"profiles" in data ? (
          !data.profiles.length ? (
            <p className="bg-[#db050529] text-[rgb(219_5_5)] text-xl py-3 px-4 rounded-xl h-12">
              هیچ آگهی ثبت نشده است
            </p>
          ) : (
            data.profiles.map((item) => <Card key={item._id} profile={item} />)
          )
        ) : null}
      </div>
    </div>
  );
};

export default BuyResidentialsPage;
