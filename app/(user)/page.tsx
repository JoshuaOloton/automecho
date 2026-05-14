import FilterTab from "@/components/filter-tab";
import Gallery from "@/components/gallery";

export default function Home() {
  return (
    <div className="w-4/5 mx-auto font-inter">
      <h2 className="text-3xl font-medium mb-4">Explore page</h2>
      <FilterTab />
      <Gallery />
    </div>
  );
}
