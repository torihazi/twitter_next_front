import { ReactNode } from "react";
import { LogoImage } from "@/components/logo-image";
import { Calendar, Image, List, MapPin, Smile, Videotape } from "lucide-react";

export type inputIconItemType = {
  icon: ReactNode;
  tooltip: string;
};

export const inputIconItems: inputIconItemType[] = [
  // {
  //   icon: <Image size={18} />,
  //   tooltip: "Image",
  // },
  {
    icon: <Videotape size={18} />,
    tooltip: "Gif",
  },
  {
    icon: <List size={18} />,
    tooltip: "Poll",
  },
  {
    icon: <Smile size={18} />,
    tooltip: "Emoji",
  },
  {
    icon: <Calendar size={18} />,
    tooltip: "Schedule",
  },
  {
    icon: <MapPin size={18} />,
    tooltip: "Geo",
  },
];
