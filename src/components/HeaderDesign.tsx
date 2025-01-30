import Image from "next/image";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

// Props ka interface define karte hain
interface HeaderDesignProps {
  title: string;
  breadcrumbs: { name: string; href: string }[];
}

export default function HeaderDesign({
  title,
  breadcrumbs,
}: HeaderDesignProps) {
  return (
    <div className="w-full h-[316px] relative flex flex-col items-center">
      <Image
        src="/shop.jpeg"
        alt="header-background"
        width={1440}
        height={450}
        className="object-cover w-full h-full blur-[2px] opacity-50"
      />

      <div className="absolute top-1/2 transform -translate-y-1/2 flex flex-col justify-center items-center gap-3 px-4">
        <div className="w-[60px] h-[60px] sm:w-[77px] sm:h-[77px]">
          <Image
            src="/shop-logo.png"
            alt={`${title.toLowerCase()}-logo`}
            width={1000}
            height={1000}
            className="object-contain"
          />
        </div>

        <h1 className="poppins font-medium text-[28px] sm:text-[36px] md:text-[48px] -mt-2">
          {title}
        </h1>

        <Breadcrumb>
          <BreadcrumbList className="flex gap-2 text-center">
            {breadcrumbs.map((breadcrumb, index) => (
              <React.Fragment key={index}>
                <BreadcrumbItem>
                  <BreadcrumbLink
                    href={breadcrumb.href}
                    className={`poppins font-medium text-[14px] sm:text-[16px] ${
                      index === breadcrumbs.length - 1
                        ? "text-gray-500"
                        : "text-black"
                    }`}
                  >
                    {breadcrumb.name}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                {index < breadcrumbs.length - 1 && (
                  <BreadcrumbSeparator className="text-black text-[14px] sm:text-[16px]" />
                )}
              </React.Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  );
}
