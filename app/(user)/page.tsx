import FilterTab from "@/components/filter-tab";
import Gallery from "@/components/gallery";

export default function Home() {
  return (
    <div className="w-4/5 mx-auto font-sans">
      <h2 className="text-3xl font-medium">Explore</h2>
      {/* <FilterTab /> */}
      <Gallery />
    </div>
  );
}
