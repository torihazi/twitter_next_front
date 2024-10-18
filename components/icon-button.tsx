import { Button } from "@nextui-org/button";
import { ReactNode } from "react";

export const IconButton = ({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick?: () => void;
}) => {
  return (
    <Button
      isIconOnly
      className="text-[#1C9BEF]"
      radius="full"
      variant="light"
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
