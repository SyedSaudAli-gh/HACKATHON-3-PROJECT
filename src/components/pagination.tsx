import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface PaginationProps {
  currentPage: number;
  onPageChange: (page: number) => void;
}

function PaginationPage({ currentPage, onPageChange }: PaginationProps) {
  const totalPages = 3; // Set this to the total number of pages based on your total product count

  const handlePageClick = (page: number) => {
    onPageChange(page);
  };

  return (
    <div>
      <div className="w-auto h-auto m-auto mt-10 sm:px-6 ">
        <Pagination>
          <PaginationContent className="flex justify-center sm:gap-4 md:gap-6 ">
            <PaginationItem>
              <PaginationPrevious
                className="bg-[#FFF9E5] rounded-[10px] sm:px-6 sm:py-6 md:px-6 md:py-6 hover:bg-[#FBEBB5] hover:cursor-pointer"
                onClick={() => handlePageClick(currentPage - 1)}
                disabled={currentPage === 1}
              />
            </PaginationItem>

            {[...Array(totalPages)].map((_, index) => (
              <PaginationItem key={index}>
                <PaginationLink
                  className={`${
                    currentPage === index + 1
                      ? "bg-[#FBEBB5] text-black"
                      : "bg-[#FFF9E5] text-black"
                  } rounded-[10px] sm:px-6 sm:py-6 md:px-6 md:py-6 hover:bg-[#FBEBB5] hover:cursor-pointer`}
                  onClick={() => handlePageClick(index + 1)}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationNext
                className="bg-[#FFF9E5] rounded-[10px] sm:px-6 sm:py-6 md:px-6 md:py-6 hover:bg-[#FBEBB5] hover:cursor-pointer"
                onClick={() => handlePageClick(currentPage + 1)}
                disabled={currentPage === totalPages}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}

export default PaginationPage;
