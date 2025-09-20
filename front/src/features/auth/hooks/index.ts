import {  useCatchError } from "../../../hooks/catch-error";
import { registerRouter, type RegisterRequest } from "../api";

export const useRegister = () => {
  const { catchError } = useCatchError();
  const { mutate: register } = registerRouter.register.useMutation({
    onSuccess: () => {},
    onError: (error) => catchError(error),
  });
  const handleSubmit = (values: RegisterRequest) => {
    register(values);
  };

  return { handleSubmit };
};
