import { ReactNode } from "react";
import {
  House,
  Search,
  Bell,
  Mail,
  Users,
  UserRound,
  CircleEllipsis,
  Bookmark,
  SquareChevronRight,
} from "lucide-react";
import { LogoImage } from "@/components/logo-image";

export type homeSiderItemType = {
  icon: ReactNode;
  label: string;
  href: string;
};

export const homeSiderItems: homeSiderItemType[] = [
  {
    icon: <House className="mr-2" />,
    label: "Home",
    href: "/home",
  },
  {
    icon: <Search className="mr-2" />,
    label: "Explore",
    href: "/explore",
  },
  {
    icon: <Bell className="mr-2" />,
    label: "Notifications",
    href: "/notifications",
  },
  {
    icon: <Mail className="mr-2" />,
    label: "Messages",
    href: "/messages",
  },
  {
    icon: <SquareChevronRight className="mr-2" />,
    label: "Grok",
    href: "/grok",
  },
  {
    icon: <Bookmark className="mr-2" />,
    label: "Bookmark",
    href: "/bookmarks",
  },
  {
    icon: <Users className="mr-2" />,
    label: "Communities",
    href: "/communities",
  },
  {
    icon: <LogoImage width={20} height={20} className="mr-2" />,
    label: "Premium",
    href: "/premiums",
  },
  {
    icon: <UserRound className="mr-2" />,
    label: "Profile",
    href: "/profile",
  },
  {
    icon: <CircleEllipsis className="mr-2" />,
    label: "More",
    href: "/more",
  },
];
