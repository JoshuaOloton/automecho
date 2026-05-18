import { ChevronRight } from "lucide-react";

type Props = {};

const KycQueueTable = (props: Props) => {
  const submissions = [
    {
      name: "John Doe",
      dateSubmitted: "2026-05-10",
    },
    {
      name: "Sarah Johnson",
      dateSubmitted: "2026-05-11",
    },
    {
      name: "Michael Smith",
      dateSubmitted: "2026-05-12",
    },
    {
      name: "Emily Davis",
      dateSubmitted: "2026-05-13",
    },
    {
      name: "Daniel Brown",
      dateSubmitted: "2026-05-14",
    },
  ];

  return (
    <div className="p-5 border">
      <h3 className="font-bold">KYC Queue</h3>
      <div className="space-y-3 border mt-5">
        {submissions.map((sub, index) => (
          <div key={index} className="flex justify-between items-center px-5 py-2">
            <div className="flex flex-col">
              <h5 className="font-semibold">{sub.name}</h5>
              <p className="text-xs text-black/50">submitted {sub.dateSubmitted}</p>
            </div>
            <ChevronRight />
          </div>
        ))}
      </div>
    </div>
  );
};

export default KycQueueTable;
