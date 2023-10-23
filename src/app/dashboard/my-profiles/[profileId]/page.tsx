import AddProfilePage from "@/templates/AddProfilePage";
import { cookies } from "next/headers";
import React from "react";

const EditProfile = async ({ params }: { params: { profileId: string } }) => {
  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/myprofiles/${params.profileId}`,
    {
      headers: { Cookie: cookies().toString() },
      cache: "no-store",
    }
  );
  const data = await res.json();

  return <AddProfilePage profile={data.profile} id={params.profileId} />;
};

export default EditProfile;
