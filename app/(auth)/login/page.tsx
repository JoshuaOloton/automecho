"use client";

import LoginForm from "@/components/login-form";
import { Info } from "lucide-react";
import Link from "next/link";

const page = () => {
  const logo = "/automecho-logo.png";
  return (
    <div className="w-4/5 h-[80vh] m-auto flex shadow-lg rounded-lg overflow-hidden">
      <div className="flex-1 hidden lg:flex flex-col bg-[#E7EEFD] p-10">
        <div className="flex items-center gap-3">
          <div className="rounded-xl p-2 flex items-center">
            <img src={logo} className="w-28" />
            <span className="text-muted-foreground text-sm">@asktheautomechanic</span>
          </div>
          {/* <span className="font-medium text-base">AutoMecho</span> */}
        </div>
        <div>
          <h1 className="text-4xl font-medium leading-snug tracking-tight mb-4">
            Elite access
            {/* <br /> */} {" "}
            awaits you.
          </h1>
          <p className="text-gray-500 mt-3 leading-relaxed max-w-xs">
            Join our exclusive platform and experience the peak of automotive
            luxury.
          </p>
          <ul className="mt-6 flex flex-col gap-3">
            {[
              "Curated luxury listings",
              "Precision service booking",
              "Concierge support 24/7",
            ].map((f) => (
              <li
                key={f}
                className="flex items-center gap-2 text-gray-500"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex-1 h-full flex flex-col items-center bg-white">
        <div className="w-4/5 m-auto">
          <LoginForm />
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 bg-[#E7EEFD] rounded-lg p-3 mt-5">
              <Info className="text-primary" />
              <p className="text-muted-foreground text-xs">
                KYC Documents must be uploaded after registration before your
                account can be used. This ensures our community remains secure and
                premium.
              </p>
            </div>
            <span className="mt-2 text-sm text-muted-foreground">Don't have an account?
              <Link className="ml-1 text-primary cursor-pointer" href="/register">Sign up</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
