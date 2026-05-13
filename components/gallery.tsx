import { cars } from "@/app/data";
import CarCard from "./car-card";

type Props = {};

const Gallery = (props: Props) => {
  return (
    <div className="grid grid-cols-3 gap-8">
      {cars.map((car, index) => (
        <CarCard
          key={index}
          img={car.img}
          name={car.name}
          desc={car.desc}
          price={car.price}
          mileage={car.mileage}
        />
      ))}
    </div>
  );
};

export default Gallery;
