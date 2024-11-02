import Head from "next/head";
import { ReactNode } from "react";

import { HomeSider } from "@/features/tweets/components/home-sider";

export const HomeTemplate = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative flex h-screen mx-28">
      <Head />
      <div className="w-[300px]">
        <HomeSider />
      </div>
      <main className="flex-grow">{children}</main>
    </div>
  );
};
