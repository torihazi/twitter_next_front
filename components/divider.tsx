import { ReactNode } from "react";

// NextuiのDividerにはChildrenが使えないため自作
export const Divider = ({ children }: { children?: ReactNode }) => {
  return (
    <div className="flex items-center justify-center w-[300px] my-2">
      <div className="flex-1 border-b "></div>
      {children}
      <div className="flex-1 border-b "></div>
    </div>
  );
};
