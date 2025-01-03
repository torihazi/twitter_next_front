import type { AppProps } from "next/app";

import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useRouter } from "next/router";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { fontSans, fontMono } from "@/config/fonts";
import "@/styles/globals.css";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <RecoilRoot>
          <ToastContainer />
          <Component {...pageProps} />
        </RecoilRoot>
      </NextThemesProvider>
    </NextUIProvider>
  );
}

export const fonts = {
  sans: fontSans.style.fontFamily,
  mono: fontMono.style.fontFamily,
};
