import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MoveRight } from "lucide-react";
import Link from "next/link";


const RecentRentalsTable = ({ summary }: { summary: boolean }) => {
  const sampleCars = [
    {
      user: "John Doe",
      vehicle: "Toyota Corolla",
      duration: "2 Hours",
      amount: "$25.00",
      status: "Completed",
    },
    {
      user: "Sarah Johnson",
      vehicle: "Honda Civic",
      duration: "5 Hours",
      amount: "$40.00",
      status: "Pending",
    },
    {
      user: "Michael Smith",
      vehicle: "Ford Explorer",
      duration: "1 Day",
      amount: "$120.00",
      status: "Completed",
    },
    {
      user: "Emily Davis",
      vehicle: "BMW X5",
      duration: "3 Days",
      amount: "$350.00",
      status: "Cancelled",
    },
    {
      user: "Daniel Brown",
      vehicle: "Mercedes-Benz C300",
      duration: "6 Hours",
      amount: "$85.00",
      status: "Active",
    },
    {
      user: "Olivia Wilson",
      vehicle: "Tesla Model 3",
      duration: "12 Hours",
      amount: "$150.00",
      status: "Completed",
    },
    {
      user: "James Miller",
      vehicle: "Hyundai Elantra",
      duration: "4 Hours",
      amount: "$30.00",
      status: "Pending",
    },
    {
      user: "Sophia Moore",
      vehicle: "Kia Sportage",
      duration: "2 Days",
      amount: "$220.00",
      status: "Active",
    },
    {
      user: "William Taylor",
      vehicle: "Lexus RX 350",
      duration: "8 Hours",
      amount: "$110.00",
      status: "Completed",
    },
    {
      user: "Ava Anderson",
      vehicle: "Nissan Altima",
      duration: "10 Hours",
      amount: "$95.00",
      status: "Cancelled",
    },
    {
      user: "Benjamin Thomas",
      vehicle: "Chevrolet Tahoe",
      duration: "5 Days",
      amount: "$500.00",
      status: "Active",
    },
    {
      user: "Isabella Jackson",
      vehicle: "Audi A4",
      duration: "7 Hours",
      amount: "$90.00",
      status: "Completed",
    },
    {
      user: "Lucas White",
      vehicle: "Volkswagen Tiguan",
      duration: "9 Hours",
      amount: "$105.00",
      status: "Pending",
    },
    {
      user: "Mia Harris",
      vehicle: "Jeep Wrangler",
      duration: "1 Week",
      amount: "$750.00",
      status: "Completed",
    },
    {
      user: "Henry Martin",
      vehicle: "Subaru Forester",
      duration: "14 Hours",
      amount: "$140.00",
      status: "Active",
    },
    {
      user: "Charlotte Thompson",
      vehicle: "Mazda CX-5",
      duration: "3 Hours",
      amount: "$28.00",
      status: "Completed",
    },
    {
      user: "Ethan Garcia",
      vehicle: "Porsche Cayenne",
      duration: "2 Weeks",
      amount: "$1500.00",
      status: "Pending",
    },
    {
      user: "Amelia Martinez",
      vehicle: "Range Rover Sport",
      duration: "4 Days",
      amount: "$600.00",
      status: "Cancelled",
    },
    {
      user: "Alexander Robinson",
      vehicle: "Volvo XC90",
      duration: "16 Hours",
      amount: "$180.00",
      status: "Completed",
    },
    {
      user: "Harper Clark",
      vehicle: "Peugeot 3008",
      duration: "11 Hours",
      amount: "$130.00",
      status: "Active",
    },
  ];

  return (
    <div className="col-span-2 p-5">
      <div className="flex justify-between">
        <h3 className="font-bold">Recent Rental Activity</h3>
        <Link href="/admin/bookings" className="italic flex items-center gap-2">
          View All
          <MoveRight size={10} />
        </Link>
      </div>
      <Table className="border mt-5">
        <TableCaption>A list of recent rental bookings.</TableCaption>
        <TableHeader>
          <TableRow className="bg-[#E7EEFD] text-muted-foreground">
            <TableHead className="w-[100px]">USER</TableHead>
            <TableHead>VEHICLE</TableHead>
            <TableHead>DURATION</TableHead>
            <TableHead>AMOUNT</TableHead>
            <TableHead>STATUS</TableHead>
            { !summary && <TableHead>ACTIONS</TableHead> }
          </TableRow>
        </TableHeader>
        <TableBody>
          {sampleCars.map((car, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{car.user}</TableCell>
              <TableCell className="font-medium">{car.vehicle}</TableCell>
              <TableCell>{car.duration}</TableCell>
              <TableCell>{car.amount}</TableCell>
              <TableCell className="">{car.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default RecentRentalsTable;
