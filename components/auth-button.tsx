import { Button } from "@nextui-org/button";
import { ReactNode } from "react";

export const AuthButton = ({
  children,
  className,
  startContent,
  endContent,
  onClick,
}: {
  children: ReactNode;
  className?: string;
  startContent?: ReactNode;
  endContent?: ReactNode;
  onClick?: () => void;
}) => {
  return (
    <Button
      startContent={startContent}
      endContent={endContent}
      radius="full"
      className={`w-[300px] mb-1 font-bold ${className}`}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
