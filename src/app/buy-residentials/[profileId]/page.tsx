import ProfileDetailsPage from "@/templates/ProfileDetailsPage";
import { BProfile } from "src/types/Profile";

const ProfileDetails = async ({
  params,
}: {
  params: { profileId: string };
}) => {
  const { profileId } = params;
  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/profile/${profileId}`
  );
  const data: { profile: BProfile } | { error: string } = await res.json();

  return <ProfileDetailsPage data={data} />;
};

export default ProfileDetails;
