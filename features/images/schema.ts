import { z } from "zod";
import {
  bytesToMB,
  calculateTotalSize,
  validateImageExtension,
} from "./utils/image-utils";

export const ImagesSchema = z.object({
  images: z
    .custom<File[]>()
    .refine((files) => files.length <= 4, {
      message: "No more than 4 images",
    })
    .refine((files) => bytesToMB(calculateTotalSize(files)) <= 5, {
      message: "Maximum file size: 5MB",
    })
    .refine((files) => validateImageExtension(files), {
      message: "Only PNG (.png) and JPEG (.jpg, .jpeg)",
    }),
});
