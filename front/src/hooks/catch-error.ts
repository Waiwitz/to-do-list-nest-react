import type { AxiosError } from "axios";
import { useSnackbar } from "notistack";
import { useCallback } from "react";

export const useCatchError = () => {
  const { enqueueSnackbar } = useSnackbar();

  const catchError = useCallback(
    (error: Error | AxiosError) => {
      console.log(error);
      if (error) {
        enqueueSnackbar(error.message, {
          variant: "error",
          anchorOrigin: { vertical: "top", horizontal: "center" },
        });
      }
    },
    [enqueueSnackbar]
  );

  return { catchError };
};
