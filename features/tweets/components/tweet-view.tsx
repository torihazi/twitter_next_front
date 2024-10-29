import { LogoImage } from "@/components/logo-image";
import { TweetsImagesWithRelations } from "../schema";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Image } from "@nextui-org/image";
import { getGridColumns } from "../utilty_func";

dayjs.extend(relativeTime);

export const TweetView = ({ tweet }: { tweet: TweetsImagesWithRelations }) => {
  return (
    <div className="flex p-2 border-1 border-gray-800">
      <div className="flex-shrink-0 mr-4">
        <LogoImage width={40} height={40} className="rounded-full" />
      </div>
      <div className="flex flex-col flex-grow">
        <div className="flex items-center gap-1">
          <span className="font-semibold">{tweet.user.name}</span>
          <span className="text-sm text-gray-500">{tweet.user.email}</span>
          <time className="text-sm text-gray-500">
            {dayjs(tweet.createdAt).fromNow()}
          </time>
        </div>

        <p className="mt-2 text-gray-900">{tweet.content}</p>

        {tweet.imageUrls?.length > 0 && (
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
    </div>
  );
};
