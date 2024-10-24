import { HomeTemplate } from "@/layouts/home-template";
import { Tab, Tabs } from "@nextui-org/tabs";
import { useState } from "react";
import { TweetForm } from "@/features/home/components/tweet-form";
import { useForm } from "react-hook-form";
import tweetsSchema from "@/prisma/generated/zod/modelSchema/tweetsSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { HomeSubSider } from "@/features/home/components/home-sub-sider";
import { imagesSchema } from "@/features/images/schema/image-schema";

export const tweetsPartialWithImagesSchema = tweetsSchema
  .merge(imagesSchema)
  .partial()
  .refine((data) => data.content || (data.images && data.images.length > 0), {
    message: "Either content or images is required",
    path: ["content"],
  });

export type tweetsPartialWithImages = z.infer<
  typeof tweetsPartialWithImagesSchema
>;

const TweetsIndex = () => {
  const [selected, setSelected] = useState<string>("for-you");
  const form = useForm<tweetsPartialWithImages>({
    resolver: zodResolver(tweetsPartialWithImagesSchema),
    mode: "onChange",
    defaultValues: {
      content: "",
      images: [],
    },
  });

  return (
    <HomeTemplate>
      <div className="flex h-screen">
        <div className="flex-auto border-1 border-gray-800 max-w-[600px]">
          <Tabs
            selectedKey={selected}
            variant="underlined"
            classNames={{
              base: "grid justify-items-stretch",
              tabList: "border-b-1 border-gray-800",
              tabContent: "group-data-[selected=true]:font-bold",
              cursor: "w-[40px] bg-[#1C9BEF]",
            }}
            onSelectionChange={setSelected}
          >
            <Tab key="for-you" title="For you">
              <TweetForm form={form} />
            </Tab>
            <Tab key="followings" title="Followings">
              <TweetForm form={form} />
            </Tab>
          </Tabs>
        </div>
        <div className="flex-none max-w-[400px] p-2 ">
          <HomeSubSider />
        </div>
      </div>
    </HomeTemplate>
  );
};

export default TweetsIndex;
