import { Link } from "@nextui-org/link";
import Head from "next/head";
import { ReactNode } from "react";

import { footerLinks } from "@/config/footer";

export const AuthTemplate = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative flex flex-col h-screen">
      <Head />
      {/* <Navbar /> */}
      <main className="flex-grow w-full">{children}</main>
      <footer className="w-full flex justify-center flex-wrap gap-2 py-3">
        {footerLinks.map((footerLink) => (
          <Link
            key={footerLink.href}
            isExternal
            className="flex items-center gap-1 text-current text-xs md:text-sm whitespace-nowrap"
            href={footerLink.href}
          >
            {footerLink.label}
          </Link>
        ))}
      </footer>
    </div>
  );
};
