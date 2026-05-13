import { Heart } from "lucide-react"
import { Button } from "./ui/button"

type CarCardProps = {
  img: string, 
  name: string, 
  desc: string,
  price: number,
  mileage: number
}

const CarCard = ({ img, name, price, mileage, desc }: CarCardProps) => {
  return (
    <div className="rounded border border-primary/20 p-4 flex flex-col gap-2">
      <img src={img} alt="car image" className="w-full" />
      <div className="flex justify-between items-start">
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-muted-foreground">{desc}</p>
        </div>
        <p className="text-primary text-xs font-medium border border-primary/50 bg-[#E2E8F7] p-1 rounded">₦{price}/day</p>
      </div>
      <div className="flex items-center gap-2">
        <Button className="flex-1">Book now</Button>
        <Button variant="outline"><Heart /></Button>
      </div>
    </div>
  )
}

export default CarCard