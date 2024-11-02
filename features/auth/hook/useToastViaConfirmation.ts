import { useRouter } from "next/router";
import { toast } from "react-toastify";

export const useToastViaConfirmation = () => {
  const router = useRouter();
  const triggerToast = () => {
    const result = router.query?.confirmation;

    if (result === "success") {
      toast.info("Verificaition success");
    } else if (result === "failure") {
      toast.info("Verificaition failure");
    }
  };

  return { triggerToast };
};
