import BuyResidentialsPage from "@/templates/BuyResidentialsPage";
import { cookies } from "next/headers";

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
  const data = await res.json();

  return <BuyResidentialsPage profiles={data.profiles} />;
};

export default BuyResidentials;
