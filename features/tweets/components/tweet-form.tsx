import { LogoImage } from "@/components/logo-image";
import { Textarea } from "@nextui-org/input";
import { inputIconItems } from "../constants/input-icons";
import { Button } from "@nextui-org/button";
import { SubmitHandler, UseFormReturn, useWatch } from "react-hook-form";
import { IconButton } from "@/components/icon-button";
import { InputImagesButton } from "@/components/input-file-button";

import { useRecoilState } from "recoil";
import { imageUrlsState } from "../../../lib/recoil/image-urls-atom";
import { Image } from "@nextui-org/image";
import { ImageIcon, X } from "lucide-react";
import { useCreateTweet } from "../hooks/useTweet";
import { useCreateImages } from "@/features/images/hooks/useImage";
import { TweetsPartialWithImages } from "../schema";
import { DynamicPropertyWithBlobIds } from "@/types";
import { TweetsPartial } from "@/prisma/generated/zod/modelSchema/TweetsSchema";

export const TweetForm = ({
  form,
  mutate,
}: {
  form: UseFormReturn<TweetsPartialWithImages>;
  mutate: () => void;
}) => {
  const content = useWatch({
    control: form.control,
    name: "content",
  }) as string;
  const [currentUrls, setUrls] = useRecoilState<string[]>(imageUrlsState);
  const { createTweet } = useCreateTweet({ onSuccess: mutate });
  const { createImages } = useCreateImages({});
  const onSubmit: SubmitHandler<TweetsPartialWithImages> = async (values) => {
    try {
      if (values.images && values.images?.length > 0) {
        const formdata = new FormData();
        values.images.forEach((file) => formdata.append("images[]", file));
        const blobIds = await createImages(formdata);

        // 画像を含めた投稿
        const submitData: DynamicPropertyWithBlobIds<TweetsPartial, "tweet"> = {
          tweet: { ...values },
          blobIds: blobIds,
        };
        await createTweet(submitData);
      } else {
        await createTweet({ tweet: { ...values } });
      }

      // 送信後のクリーンアップ
      form.reset();
      setUrls([]);
    } catch (error) {
      console.log(error);
    }
  };

  const removeImages = (currentUrl: string, index: number) => {
    const files = form?.getValues("images");
    if (files) {
      form?.setValue(
        "images",
        files?.filter((_, num) => num !== index)
      );
      setUrls(currentUrls.filter((url) => url !== currentUrl));
      form?.trigger();
    }
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

          {form.formState.errors.content && (
            <span>{form.formState.errors.content.message}</span>
          )}
          {form.formState.errors.images && (
            <span>{form.formState.errors.images.message}</span>
          )}

          {/* 画像プレビュー挿入 */}
          <div className="flex overflow-x-auto">
            {currentUrls.length > 0 &&
              currentUrls.map((url, index) => (
                <div key={url} className="shrink-0 relative">
                  <Image
                    alt={`画像${index}枚目`}
                    src={`${url}`}
                    radius="lg"
                    width={`${currentUrls.length === 1 ? 500 : 300}`}
                  />
                  <Button
                    isIconOnly
                    variant="solid"
                    radius="full"
                    className="absolute top-1 right-1 z-10"
                    onClick={() => removeImages(url, index)}
                  >
                    <X />
                  </Button>
                </div>
              ))}
          </div>

          <div className="flex justify-between my-2">
            <div className="flex">
              <InputImagesButton icon={<ImageIcon size={18} />} form={form} />
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
