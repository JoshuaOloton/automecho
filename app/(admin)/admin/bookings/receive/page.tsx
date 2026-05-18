"use client";

import { ChangeEvent, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldContent,
  FieldGroup,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CircleCheckBig } from "lucide-react";
import BreadcrumbPath from "@/components/breadcrumb-path";


export type Path = {
  text: string,
  link: string
}

type Props = {};

const page = (props: Props) => {
  const [odometerReading, setOdometerReading] = useState<string>("");
  const [checked, setChecked] = useState<boolean>(false);
  const [vehicleStatus, setVehicleStatus] = useState<string>("");

  const paths: Path[] = [
    {
      text: "Bookings",
      link: "/admin/bookings"
    },
    {
      text: "Recieve Vehicle",
      link: "/admin/bookings/receive"
    },
  ];

  return (
    <div className="w-4/5 mx-auto font-sans">
      <div className="flex items-center my-10">
        <div className="flex-1 space-y-1.5">
          <BreadcrumbPath paths={paths} />
          <h2 className="text-3xl font-semibold mb-4">Receive Vehicle</h2>
        </div>
        <div className="flex items-center justify-center bg-[#E7EEFD] px-4 py-2 text-sm font-semibold text-black/70 rounded-xl">
          <h6>BOOKING ID: #BK-1046</h6>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5">
        <div className="rounded-lg border border-primary/10 bg-white px-6 py-8">
          <img src="/cars/corolla.jpg" alt="car image" />
          <h6 className="font-bold text-xl my-3">2018 Toyota Corolla</h6>
          <hr />
          <div className="flex justify-between mt-3">
            <div className="space-y-1">
              <h5 className="text-black/40 font-medium">CUSTOMER</h5>
              <p>Alexander Vance</p>
            </div>
            <div className="space-y-1">
              <h5 className="text-black/40 font-medium">RENTAL PERIOD</h5>
              <p>4 days(late 5h)</p>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-primary/10 bg-white px-6 py-8 col-span-2 space-y-8">
          <div className="flex items-center justify-between">
            <h4 className="font-semibold text-xl">Return Confirmation</h4>
            <Badge variant={"default"}>In progress</Badge>
          </div>
          <div className="space-y-2">
            <Label htmlFor="odometer">Final Odometer Reading (km)</Label>
            <Input id="odometer" type="number" placeholder="e.g 14350" className="border-primary/50 rounded-none focus-visible:ring-0" value={odometerReading} onChange={e => setOdometerReading(e.target.value)} />
          </div>
          <div className="space-y-2">
            <h4 className="font-medium text-sm">Vehicle Status</h4>
            <RadioGroup defaultValue="option-one" className="flex" value={vehicleStatus} onValueChange={setVehicleStatus}>
              <FieldLabel htmlFor="clean">
                <Field orientation="horizontal" >
                  <FieldContent>
                    <FieldTitle>Clean</FieldTitle>
                  </FieldContent>
                  <RadioGroupItem value="clean" id="clean" />
                </Field>
              </FieldLabel>
              <FieldLabel htmlFor="requires-cleaning">
                <Field orientation="horizontal">
                  <FieldContent>
                    <FieldTitle>Requires Cleaning</FieldTitle>
                  </FieldContent>
                  <RadioGroupItem value="Requires Cleaning" id="requires-cleaning" />
                </Field>
              </FieldLabel>
              <FieldLabel htmlFor="needs-maintenance">
                <Field orientation="horizontal">
                  <FieldContent>
                    <FieldTitle>Needs Maintenance</FieldTitle>
                  </FieldContent>
                  <RadioGroupItem value="Needs Maintenance" id="needs-maintenance" />
                </Field>
              </FieldLabel>
            </RadioGroup>
          </div>
          <div className="bg-[#EFF3FF] rounded-lg px-4 py-4 border border-primary/10">
            <Field orientation="horizontal">
              <Checkbox id="confirm-check" checked={checked} name="confirm-check" onCheckedChange={() => setChecked(state => !state)} />
              <Label htmlFor="confirm-check" className="text-black/90">I confirm the vehicle has been inspected and returned in acceptable condition</Label>
            </Field>
          </div>
          <div className="flex justify-end">
            <Button className="px-8 py-6 text-lg font-medium" disabled={!checked || !vehicleStatus || Number(odometerReading) === 0}>
              Confirm Return
              <CircleCheckBig />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
