import TweetsSchema, {
  TweetsRelations,
} from "@/prisma/generated/zod/modelSchema/TweetsSchema";
import { z } from "zod";
import { ImagesSchema } from "../images/schema";
import { Tweets, Users } from "@prisma/client";

//
// 画像添付可能なツイート用スキーマ
//

export const TweetsPartialWithImagesSchema = TweetsSchema.merge(ImagesSchema)
  .partial()
  .refine((data) => data.content || (data.images && data.images.length > 0), {
    message: "Either content or images is required",
    path: ["content"],
  });

export type TweetsPartialWithImages = z.infer<
  typeof TweetsPartialWithImagesSchema
>;

//
// 適切な説明が思いつかない。
//

export type TweetImages = Tweets & {
  imageUrls: string[];
};

//
// 今後拡張予定？ index画面で表示するtweetの型
//
export type TweetsImagesWithRelations = TweetImages & {
  user: Users;
};
