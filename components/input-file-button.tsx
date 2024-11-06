import { ChangeEvent, forwardRef, ReactNode, useRef } from "react";
import { IconButton } from "./icon-button";
import { UseFormReturn } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { imageUrlsState } from "@/lib/recoil/image-urls-atom";

export const InputImagesButton = ({
  icon,
  form,
}: {
  icon: ReactNode;
  form?: UseFormReturn;
}) => {
  const setImageUrls = useSetRecoilState<string[]>(imageUrlsState);
  const inputRef = useRef<HTMLInputElement>(null);

  const onChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const filelists = e.target.files;
    if (filelists) {
      const urls = Array.from(filelists).map((file) =>
        URL.createObjectURL(file)
      );

      form?.setValue("images", Array.from(filelists));

      const result = await form?.trigger();
      if (result) {
        setImageUrls(urls);
      }
    }
  };

  return (
    <>
      <IconButton
        className="text-[#1C9BEF]"
        onClick={() => inputRef.current?.click()}
      >
        {icon}
      </IconButton>
      <input
        {...form?.register("images", {
          onChange,
        })}
        ref={inputRef}
        accept="image/png, image/jpeg"
        className="hidden"
        type="file"
        multiple
      />
    </>
  );
};
