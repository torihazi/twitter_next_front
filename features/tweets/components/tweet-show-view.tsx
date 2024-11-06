import { LogoImage } from "@/components/logo-image";
import { TweetsImagesWithRelations } from "../schema";
import { IconButton } from "@/components/icon-button";
import { Ellipsis } from "lucide-react";
import { getGridColumns } from "../utilty_func";
import { Image } from "@nextui-org/image";
import dayjs from "dayjs";
import { reactionIconItems } from "../constants/reaction-icons";

export const TweetShowView = ({
  tweet,
}: {
  tweet: TweetsImagesWithRelations;
}) => {
  return (
    <div className="flex flex-col p-3 border-b border-gray-800 ">
      {/* TweetUser情報部分 */}
      <div className="flex justify-between">
        <div className="p-2">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <LogoImage width={20} height={20} />
            </div>
            <div className="flex flex-col ml-2 text-gray-300">
              <span className="text-base leading-3">{tweet?.user?.name}</span>
              <span className="text-sm">{tweet?.user?.email}</span>
            </div>
          </div>
        </div>
        <div>
          <IconButton className="text-white">
            <Ellipsis />
          </IconButton>
        </div>
      </div>
      {/* TweetContent部分 */}
      <div className="p-2 border-b border-gray-800">
        <div className="whitespace-pre-wrap ">{tweet?.content}</div>
        {tweet?.imageUrls && tweet?.imageUrls.length > 0 && (
          <div className="mt-3 grid gap-2 auto-rows-auto">
            <div
              className={`grid ${getGridColumns(tweet.imageUrls.length)} gap-2`}
            >
              {tweet.imageUrls.map((url, imgIndex) => (
                <Image
                  key={imgIndex}
                  src={url}
                  isZoomed
                  width="100%"
                  height={300}
                  alt={`Tweet image ${imgIndex + 1}`}
                  radius="lg"
                  className="w-full"
                  classNames={{
                    img: "object-cover w-full h-full",
                    wrapper: "w-full h-full",
                  }}
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        )}
      </div>
      {/* Tweet投稿Meta情報 */}
      <div className="p-2 text-gray-400 text-sm border-b border-gray-800">
        <span className="pr-3">
          {dayjs(tweet?.createdAt).locale("jp").format("h:mm A・MMM D, YYYY")}
        </span>
        <span>230 View</span>
      </div>
      {/* アイコンボタン */}
      <div className="flex justify-between border-b border-gray-800">
        {reactionIconItems.map((item, index) => (
          <IconButton key={index} className={item.className}>
            {item.icon}
          </IconButton>
        ))}
      </div>
    </div>
  );
};
