import { Link } from "@nextui-org/link";
import Head from "next/head";
import { ReactNode } from "react";

import { footerLinks } from "@/config/footer";
import { HomeSider } from "@/features/home/components/home-sider";

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
