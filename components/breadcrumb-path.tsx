import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import type { Path } from "@/app/(admin)/admin/bookings/receive/page";


const BreadcrumbPath = ({ paths }: { paths: Path[] }) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {paths.map((link, index) => (
          index < paths.length - 1 ? (
            <>
              <BreadcrumbItem>
                <BreadcrumbLink href={link.link}>{link.text}</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </>
          ) : (
            <BreadcrumbItem>
              <BreadcrumbLink href={link.link}>{link.text}</BreadcrumbLink>
            </BreadcrumbItem>
          )
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadcrumbPath;
