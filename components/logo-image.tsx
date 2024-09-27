import { useTheme } from "next-themes";
import Image from "next/image";

type LogoImageTypes = {
  width: number | `${number}`;
  height: number | `${number}`;
};

export const LogoImage = ({ width, height }: LogoImageTypes) => {
  const { theme } = useTheme();

  return (
    <Image
      alt="x-icon"
      height={height}
      // TODO
      // うまく切り替わらない。書き方がおかしいか。
      src={`${theme === "light" ? "/logo-black.png" : "/logo-white.png"}`}
      width={width}
    />
  );
};
