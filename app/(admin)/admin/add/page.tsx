"use client";

import InfoForm from "@/components/info-form";
import MediaForm from "@/components/media-form";
import SpecificationForm from "@/components/specification-form";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import z from "zod";

const page = () => {
  const onSubmit = (data: any) => {
    console.log(data);
    // call api
  };

  const MAX_FILE_SIZE = 5000000; // 5MB
  const ACCEPTED_IMAGE_TYPES = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/webp",
  ];

  const schema = z.object({
    brand: z.string().min(1, "Brand is required"),
    model: z.string().min(1, "Model is required"),
    year: z.coerce.number().min(1900).max(new Date().getFullYear()),
    mileage: z.coerce.number().min(0, "Cannot be negative"),
    photos: z.object({
      front: z
        .instanceof(File, { message: "Front photo required" })
        .refine(
          (file) => ACCEPTED_IMAGE_TYPES.includes(file.type),
          "Only .jpg, .jpeg, .png and .webp formats are supported.",
        ),
      rear: z
        .instanceof(File, { message: "Rear photo required" })
        .refine(
          (file) => ACCEPTED_IMAGE_TYPES.includes(file.type),
          "Only .jpg, .jpeg, .png and .webp formats are supported.",
        ),
      side: z
        .instanceof(File, { message: "Side photo required" })
        .refine(
          (file) => ACCEPTED_IMAGE_TYPES.includes(file.type),
          "Only .jpg, .jpeg, .png and .webp formats are supported.",
        ),
      interior: z
        .instanceof(File, { message: "Interior photo required" })
        .refine(
          (file) => ACCEPTED_IMAGE_TYPES.includes(file.type),
          "Only .jpg, .jpeg, .png and .webp formats are supported.",
        ),
    }),
  });

  const methods = useForm({
    defaultValues: {
      brand: "",
      model: "",
      year: "",
      mileage: "",
    },
    resolver: zodResolver(schema),
  });

  return (
    <div className="w-4/5 mx-auto font-sans">
      <div className="flex items-end my-10">
        <div className="flex-1">
          <h2 className="text-3xl font-semibold mb-4">Add New Vehicle</h2>
          <p className="text-black/70">
            Enter the specifications for the new fleet addition. Ensure
            high-resolution imagery for luxury listings.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Cancel</Button>
          <Button type="submit" form="addCarForm">
            Save Vehicle
          </Button>
        </div>
      </div>
      <div>
        <FormProvider {...methods}>
          <form className="grid grid-cols-3 gap-4" id="addCarForm" onSubmit={methods.handleSubmit(onSubmit)}>
            <InfoForm />
            <MediaForm />
            {/* <SpecificationForm /> */}
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default page;
