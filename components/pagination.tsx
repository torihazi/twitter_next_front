import { Button } from "@nextui-org/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

type PaginationProps = {
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  totalItems: number;
  itemsPerPage: number;
};

export const Pagination = ({
  currentPage,
  setCurrentPage,
  totalItems,
  itemsPerPage,
}: PaginationProps) => {
  const maxPageNum = Math.ceil(totalItems / itemsPerPage);

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const showEllipsis = maxPageNum > 7;

    if (showEllipsis) {
      if (currentPage <= 4) {
        for (let i = 1; i <= 5; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...", maxPageNum);
      } else if (currentPage >= maxPageNum - 3) {
        pageNumbers.push(1, "...");
        for (let i = maxPageNum - 4; i <= maxPageNum; i++) {
          pageNumbers.push(i);
        }
      } else {
        pageNumbers.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          maxPageNum
        );
      }
    } else {
      for (let i = 1; i <= maxPageNum; i++) {
        pageNumbers.push(i);
      }
    }

    return pageNumbers.map((number, index) => (
      <Button
        key={index}
        isIconOnly
        className={`${number === currentPage ? "font-bold" : ""}`}
        color={`${number === currentPage ? "primary" : "default"}`}
        radius="full"
        size="sm"
        onClick={() => setCurrentPage(number as number)}
      >
        {number}
      </Button>
    ));
  };

  return (
    <div className="flex items-center justify-center">
      <Button
        size="sm"
        isIconOnly
        radius="full"
        onClick={() => setCurrentPage(currentPage - 1)}
        isDisabled={currentPage === 1}
      >
        <ChevronLeftIcon />
      </Button>
      {renderPageNumbers()}
      <Button
        isIconOnly
        radius="full"
        size="sm"
        onClick={() => setCurrentPage(currentPage + 1)}
        isDisabled={currentPage === maxPageNum}
      >
        <ChevronRightIcon />
      </Button>
    </div>
  );
};
