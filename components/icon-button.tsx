import { cn } from "@/lib/util/utils";
import { Button } from "@nextui-org/button";
import { ReactNode } from "react";

export const IconButton = ({
  children,
  className,
  onClick,
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <Button
      isIconOnly
      className={cn(className)}
      radius="full"
      variant="light"
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
