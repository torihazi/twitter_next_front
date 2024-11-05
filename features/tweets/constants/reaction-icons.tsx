import {
  ArrowLeftRightIcon,
  Bookmark,
  Download,
  Heart,
  MessageSquare,
} from "lucide-react";
import { ReactNode } from "react";

export type ReactionIconItemType = {
  icon: ReactNode;
  className?: string;
  tooltip: string;
};

export const reactionIconItems: ReactionIconItemType[] = [
  {
    icon: <MessageSquare size={18} />,
    className: "data-[hover=true]:text-primary",
    tooltip: "Comment",
  },
  {
    icon: <ArrowLeftRightIcon size={18} />,
    className: "data-[hover=true]:text-success",
    tooltip: "Retweet",
  },
  {
    icon: <Heart size={18} />,
    className: "data-[hover=true]:text-danger",
    tooltip: "Good",
  },
  {
    icon: <Bookmark size={18} />,
    className: "data-[hover=true]:text-primary",
    tooltip: "BookMark",
  },
  {
    icon: <Download size={18} />,
    className: "data-[hover=true]:text-primary",
    tooltip: "Download",
  },
];
