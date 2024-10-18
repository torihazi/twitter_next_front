import { LogoImage } from "@/components/logo-image";
import { Input, Textarea } from "@nextui-org/input";
import { inputIconItems } from "../consts/input-icons";
import { Tooltip } from "@nextui-org/tooltip";
import { Button } from "@nextui-org/button";
import { SubmitHandler, UseFormReturn, useWatch } from "react-hook-form";
import { tweetsPartial } from "@/prisma/generated/zod/modelSchema/tweetsSchema";
import { useCreateTweet } from "@/lib/api/tweet";
import { IconButton } from "@/components/icon-button";
import { InputImagesButton } from "@/components/input-file-button";
import { Image } from "lucide-react";
import { useRecoilValue } from "recoil";
import { imageUrlsState } from "../recoil/image-urls-atom";
import { tweetsPartialWithImages } from "@/pages/tweets";

export const TweetForm = ({ form }: { form: UseFormReturn }) => {
  const content = useWatch({ control: form.control, name: "content" });
  const currentUrls = useRecoilValue<string[]>(imageUrlsState);
  const { createTweet } = useCreateTweet({});
  const onSubmit: SubmitHandler<tweetsPartialWithImages> = async (values) => {
    // const newTweet = createTweet(values);
    console.log(values);
  };

  return (
    <form
      className="border-b-1 border-gray-800"
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <div className="flex">
        <div className="flex-shrink-0">
          <LogoImage width={20} height={20} className="" />
        </div>
        <div className="flex flex-col flex-1">
          <Textarea
            {...form.register("content")}
            placeholder="What is happening?"
            radius="none"
            isInvalid={!form.formState.isValid}
            errorMessage={form.formState.errors.content?.message as string}
            classNames={{
              inputWrapper: [
                "bg-transparent",
                "hover:bg-none",
                "data-[hover=true]:bg-transparent",
                "group-data-[focus=true]:bg-transparent",
                "border-b-1 border-gray-800",
              ],
              input: "bg-transparent",
            }}
          />
          {/* 画像プレビュー挿入 */}
          {currentUrls.length > 0 &&
            currentUrls.map((url) => (
              <div key={url}>
                <img src={`${url}`} alt="" />
              </div>
            ))}

          <div className="flex justify-between my-2">
            <div className="flex">
              <InputImagesButton icon={<Image size={18} />} form={form} />
              {inputIconItems.map((item, index) => (
                <IconButton key={index}>{item.icon}</IconButton>
              ))}
            </div>

            <div className="flex">
              <div
                className={`flex items-center mr-2 ${content?.length > 150 && "text-red-600"}`}
              >
                {`${content?.length}`}/ 150
              </div>
              <Button
                type="submit"
                radius="full"
                className="bg-[#1C9BEF]"
                isDisabled={!form.formState.isValid}
              >
                post
              </Button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
