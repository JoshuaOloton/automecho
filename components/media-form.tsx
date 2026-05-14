import { Info } from "lucide-react";
import ImageUpload from "./image-upload";

type Props = {};

const MediaForm = (props: Props) => {
  return (
    <div className="bg-white border border-primary/20 p-6">
      <h5 className="text-xl font-semibold mb-4">Vehicle Media</h5>
      <ImageUpload />
      <div className="flex items-start gap-2 bg-[#E7EEFD] rounded-lg p-3 mt-5">
        <Info className="text-primary" />
        <p className="text-muted-foreground text-xs">
          <span className="font-bold">Upload Guidelines</span>
          <br />
          KYC Documents must be uploaded after registration before your account
          can be used. This ensures our community remains secure and premium.
        </p>
      </div>
    </div>
  );
};

export default MediaForm;
