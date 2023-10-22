import DashboardCard from "@/modules/dashboard-myProfiles/DashboardCard";
import { BProfile } from "src/types/Profile";

interface Props {
  profiles: BProfile[];
}

const MyProfilesPage: React.FC<Props> = ({ profiles }) => {
  return (
    <div>
      {profiles.length ? null : <p>هیچ آگهی ثبت نشده است</p>}
      {profiles.map((item) => (
        <DashboardCard key={item._id} profile={item} />
      ))}
    </div>
  );
};

export default MyProfilesPage;
