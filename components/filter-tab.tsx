import { Button } from "./ui/button"


const FilterTab = () => {
  return (
    <div className="flex justify-between items-center border border-primary bg-white">
      <Button variant="outline">All Filters</Button>
      <div className="flex">
        <Button>Luxury</Button>
        <Button>Electric</Button>
        <Button>SUV</Button>
        <Button>Performance</Button>
      </div>
      <div className="flex">
        <Button variant="outline">Sort by Popularity</Button>
        <Button variant="outline">Availability</Button>
      </div>
    </div>
  )
}

export default FilterTab