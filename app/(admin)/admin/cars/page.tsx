import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { CarFront, CircleCheck, Clock } from "lucide-react";

type Props = {};

const page = (props: Props) => {
  const data = [
    {
      icon: <CarFront size={20} className="text-red-500 p-0.5 bg-red-100 rounded" />,
      title: "Total Fleet",
      description: "224 cars",
    },
    {
      icon: <CircleCheck className="text-green-500 p-0.5 bg-green-100 rounded" />,
      title: "Available",
      description: "86 units",
    },
    {
      icon: <Clock className="text-red-500 p-0.5 bg-red-100 rounded" />,
      title: "Booked",
      description: "32 units",
    },
  ]
  return (
    <div className="w-4/5 mx-auto font-sans py-10">
      <div className="grid grid-cols-3 border border-primary/10 rounded-lg bg-white">
        {data.map((item, index) => (
          <Item key={index}>
            <ItemMedia variant="icon">
              {item.icon}
            </ItemMedia>
            <ItemContent>
              <ItemTitle>{item.title}</ItemTitle>
              <ItemDescription>
                {item.description}
              </ItemDescription>
            </ItemContent>
          </Item>
        ))}
      </div>
    </div>
  );
};

export default page;
