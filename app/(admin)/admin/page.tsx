import DashboardCard from "@/components/dashboard-card";
import KycQueueTable from "@/components/kyc-queue-table";
import RecentRentalsTable from "@/components/recent-rentals-table";
import { Calendar, Car, KeyRound, ShieldCheck } from "lucide-react";


type Props = {};

const page = (props: Props) => {
  const data = [
    {
      icon: <Car size={40} className="text-primary bg-[#E2E8F7] rounded p-2" />,
      text: "Total Cars",
      value: 1248,
    },
    {
      icon: (
        <Calendar size={40} className="text-primary bg-[#E2E8F7] rounded p-2" />
      ),
      text: "Pending KYC Approvals",
      value: 42,
    },
    {
      icon: (
        <ShieldCheck
          size={40}
          className="text-primary bg-[#E2E8F7] rounded p-2"
        />
      ),
      text: "Pending Bookings",
      value: 156,
    },
    {
      icon: (
        <KeyRound size={40} className="text-primary bg-[#E2E8F7] rounded p-2" />
      ),
      text: "Active Rentals",
      value: 812,
    },
  ];

  return (
    <div className="w-4/5 mx-auto font-sans">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">
        {data.map((d, i) => (
          <DashboardCard key={i} icon={d.icon} text={d.text} value={d.value} />
        ))}
      </div>

      <div className="grid grid-cols-3 border mt-10">
        <RecentRentalsTable summary={true} />
        <KycQueueTable />
      </div>
    </div>
  );
};

export default page;
