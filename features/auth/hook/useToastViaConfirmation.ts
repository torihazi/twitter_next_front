import { useRouter } from "next/router";
import { useEffect } from "react";
import { toast } from "react-toastify";

export const useToastViaConfirmation = () => {
  const router = useRouter();
  const triggerToast = () => {
    const result = router.query?.confirmation;

    if (result === "success") {
      toast.info("認証に成功しました");
    } else if (result === "failure") {
      toast.info("認証に失敗しました");
    }
  };

  return { triggerToast };
};
