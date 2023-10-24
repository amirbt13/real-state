import BuyResidentialsPage from "@/templates/BuyResidentialsPage";
import { cookies } from "next/headers";
import { BProfile } from "src/types/Profile";

const BuyResidentials = async ({
  searchParams,
}: {
  searchParams: { category: string };
}) => {
  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/profiles${
      searchParams.category ? "?category=" + searchParams.category : ""
    }`,
    {
      headers: {
        "Content-Type": "application/json",
        Cookies: cookies().toString(),
      },
      cache: "no-store",
    }
  );
  const data: { profiles: BProfile[] } | { error: string } = await res.json();
  //   console.log(data);
  return <BuyResidentialsPage data={data} />;
};

export default BuyResidentials;
