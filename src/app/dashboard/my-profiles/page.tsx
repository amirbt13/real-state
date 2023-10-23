import MyProfilesPage from "@/templates/MyProfilesPage";
import { cookies } from "next/headers";

const MyProfiles = async () => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/myprofiles`, {
    headers: { Cookie: cookies().toString() },
    cache: "no-store",
  });
  const data = await res.json();

  return <MyProfilesPage profiles={data.profiles} />;
};

export default MyProfiles;
