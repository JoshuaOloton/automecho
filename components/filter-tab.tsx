import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const FilterTab = () => {
  return (
    <div className="flex justify-between items-center border border-primary bg-white">
      <div className="flex gap-3">
        <Button variant="outline">Luxury</Button>
        <Button variant="outline">Electric</Button>
        <Button variant="outline">SUV</Button>
        <Button variant="outline">Performance</Button>
      </div>
      <div className="flex">
        <Select>
          <SelectTrigger className="w-full max-w-48">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Sort by Popularity</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button variant="outline"></Button>
        <Button variant="outline">Availability</Button>
      </div>
    </div>
  );
};

export default FilterTab;
