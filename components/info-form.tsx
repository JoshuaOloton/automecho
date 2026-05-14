"use client";

import { useForm, Controller, useFormContext } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

type Props = {};

const InfoForm = (props: Props) => {
  const currentYear = new Date().getFullYear();

  const formSchema = z.object({
    brand: z.string().min(1, "Car brand is required"),

    model: z.string().min(1, "Car model is required"),

    manufacturingYear: z.coerce
      .number<number>({
        error: "Manufacturing year must be a number",
      })
      .int("Year must be a whole number")
      .min(1886, "Invalid manufacturing year")
      .max(currentYear, `Year cannot exceed ${currentYear}`),

    currentMileage: z.coerce
      .number<number>({
        error: "Mileage must be a number",
      })
      .min(0, "Mileage cannot be negative")
      .max(2_000_000, "Mileage seems invalid"),
  });

  const {
    control,
    reset,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useFormContext();

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
    // call api
  };

  return (
    <Card className="col-span-2 rounded-none">
      <CardHeader>
        <CardTitle className="text-xl font-semibold mb-4">General Information</CardTitle>
      </CardHeader>
      <CardContent>
        <FieldGroup className="grid grid-cols-2">
            {/* Brand Name */}
            <Controller
              name="brand"
              control={control}
              render={({ field, fieldState }) => (
                <Field
                  data-invalid={fieldState.invalid}
                >
                  <FieldLabel className="text-muted-foreground font-semibold" htmlFor="brand">Full name</FieldLabel>
                  <Input
                    {...field}
                    id="brand"
                    className="border-primary/50 rounded-none"
                    aria-invalid={fieldState.invalid}
                    placeholder="e.g Mercedes Benz"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            {/* Model */}
            <Controller
              name="model"
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel className="text-muted-foreground font-semibold" htmlFor="model">Model</FieldLabel>
                  <Input
                    {...field}
                    id="model"
                    className="border-primary/50 rounded-none"
                    aria-invalid={fieldState.invalid}
                    placeholder="e.g S-Class Maybach"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            {/* Phone No */}
            <Controller
              name="manufacturingYear"
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel 
                    className="text-muted-foreground font-semibold"
                    htmlFor="manufacturingYear">
                      Manufacturing Year
                  </FieldLabel>
                  <Input
                    {...field}
                    id="manufacturingYear"
                    className="border-primary/50 rounded-none"
                    aria-invalid={fieldState.invalid}
                    placeholder="+234123456789"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            {/* Password */}
            <Controller
              name="currentMileage"
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel 
                    className="text-muted-foreground font-semibold"
                    htmlFor="currentMileage">
                      Current Mileage (km)
                  </FieldLabel>
                  <Input
                    {...field}
                    type="number"
                    id="currentMileage"
                    className="border-primary/50 rounded-none"
                    aria-invalid={fieldState.invalid}
                    placeholder="******"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
      </CardContent>
    </Card>
  );
};

export default InfoForm;
