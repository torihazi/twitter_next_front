import { ChangeEvent, forwardRef, ReactNode, useRef } from "react";
import { IconButton } from "./icon-button";
import { UseFormReturn } from "react-hook-form";
import { useRecoilState, useSetRecoilState } from "recoil";
import { imageUrlsState } from "@/features/home/recoil/image-urls-atom";

export const InputImagesButton = ({
  icon,
  form,
}: {
  icon: ReactNode;
  form?: UseFormReturn;
}) => {
  const [currentUrls, setImageUrls] = useRecoilState<string[]>(imageUrlsState);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const filelists = e.target.files;
    if (filelists) {
      const urls = Array.from(filelists).map((file) =>
        URL.createObjectURL(file)
      );
      setImageUrls(urls);
    }

    // const reader = new FileReader();

    // reader.onload = () => {
    //   setImageUrls((prev) => [...prev, reader.result as string]);
    // };

    // reader.readAsDataURL(files[0]);
  };

  return (
    <>
      <IconButton onClick={() => inputRef.current?.click()}>{icon}</IconButton>
      <input
        {...form?.register("images", {
          onChange: handleChange,
        })}
        ref={inputRef}
        accept="image/png image/jpeg"
        className="hidden"
        name="images"
        type="file"
        multiple
      />
    </>
  );
};
