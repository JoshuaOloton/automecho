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
import { CircleCheck, CircleCheckBig, CircleX } from "lucide-react";
import BreadcrumbPath from "@/components/breadcrumb-path";

export type Path = {
  text: string;
  link: string;
};

type Props = {};

const page = (props: Props) => {
  const [odometerReading, setOdometerReading] = useState<string>("");
  const [checked, setChecked] = useState<boolean>(false);
  const [vehicleStatus, setVehicleStatus] = useState<string>("");

  const paths: Path[] = [
    {
      text: "User Management",
      link: "/admin/users",
    },
    {
      text: "KYC Approval",
      link: "/admin/kyc/[kycId]",
    },
  ];

  return (
    <div className="w-4/5 mx-auto font-sans">
      <div className="flex items-center my-10">
        <div className="flex-1 space-y-1.5">
          <BreadcrumbPath paths={paths} />
          <h2 className="text-3xl font-semibold mb-4">User Approval</h2>
        </div>
        <div className="flex items-center justify-center bg-[#E7EEFD] px-4 py-2 text-sm font-semibold text-black/70 rounded-xl">
          <h6>PENDING APPROVAL</h6>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5">
        <div className="rounded-lg border border-primary/10 bg-white px-6 py-8">
          <div className="flex flex-col items-center">
            <img src="/avatar.png" alt="user image" />
            <h6 className="font-bold text-xl my-3">David Chen</h6>
          </div>
          <hr />
          <div className="flex flex-col gap-4 mt-3">
            <div className="flex items-center justify-between">
              <h5 className="text-black/40">Email</h5>
              <p className="font-medium">davidchen@example.com</p>
            </div>
            <div className="flex items-center justify-between">
              <h5 className="text-black/40">Phone</h5>
              <p className="font-medium">+234 1234 56 789</p>
            </div>
            <div className="flex items-center justify-between">
              <h5 className="text-black/40">Join Date</h5>
              <p className="font-medium">May 21, 2026</p>
            </div>
            <div className="flex items-center justify-between">
              <h5 className="text-black/40">Location</h5>
              <p className="font-medium">Lagos, NG</p>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-primary/10 bg-white px-6 py-8 col-span-2 space-y-8">
          <div className="flex items-center justify-between">
            <h4 className="font-semibold text-xl">KYC Documents</h4>
            <Badge variant={"default"}>In progress</Badge>
          </div>
          <div className="space-y-2">
            <Label htmlFor="odometer">Final Odometer Reading (km)</Label>
            <Input
              id="odometer"
              type="number"
              placeholder="e.g 14350"
              className="border-primary/50 rounded-none focus-visible:ring-0"
              value={odometerReading}
              onChange={(e) => setOdometerReading(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <h4 className="font-medium text-sm">Vehicle Status</h4>
            <RadioGroup
              defaultValue="option-one"
              className="flex"
              value={vehicleStatus}
              onValueChange={setVehicleStatus}
            >
              <FieldLabel htmlFor="clean">
                <Field orientation="horizontal">
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
                  <RadioGroupItem
                    value="Requires Cleaning"
                    id="requires-cleaning"
                  />
                </Field>
              </FieldLabel>
              <FieldLabel htmlFor="needs-maintenance">
                <Field orientation="horizontal">
                  <FieldContent>
                    <FieldTitle>Needs Maintenance</FieldTitle>
                  </FieldContent>
                  <RadioGroupItem
                    value="Needs Maintenance"
                    id="needs-maintenance"
                  />
                </Field>
              </FieldLabel>
            </RadioGroup>
          </div>
          <div className="bg-[#EFF3FF] rounded-lg px-4 py-4 border border-primary/10">
            <Field orientation="horizontal">
              <Checkbox
                id="confirm-check"
                checked={checked}
                name="confirm-check"
                onCheckedChange={() => setChecked((state) => !state)}
              />
              <Label htmlFor="confirm-check" className="text-black/90">
                I confirm the vehicle has been inspected and returned in
                acceptable condition
              </Label>
            </Field>
          </div>
        </div>
        <div className="col-span-full rounded-lg border border-primary/10 bg-white px-6 py-8 space-y-5">
          <h4 className="font-semibold text-black/80 text-sm">DECISION MANAGEMENT</h4>
          <Field>
            <FieldLabel htmlFor="rejection-reason">
              Internal notes / Rejection Reason
            </FieldLabel>
            <Input
              id="rejection-reason"
              type="password"
              placeholder="If rejecting, please specify the reason here..."
            />
          </Field>
          <div className="flex flex-col md:flex-row gap-6">
            <Button className="flex-1">
              Approve User
              <CircleCheck />
            </Button>
            <Button className="flex-1" variant={"outline"}>
              Reject User
              <CircleX />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
