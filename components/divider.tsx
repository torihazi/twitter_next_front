import { ReactNode } from "react";

// NextuiのDividerにはテキストを挟み込めないので自作
export const Divider = ({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) => {
  return (
    <div className={`flex items-center justify-center my-2 ${className}`}>
      <div className="flex-1 border-b" />
      {children}
      <div className="flex-1 border-b" />
    </div>
  );
};
