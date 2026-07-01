import { useMutation } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";

import { client } from "@/lib/rpc";

type ResponseType = InferResponseType<typeof client.api.auth.login["$post"], 200>;
type RequestType = InferRequestType<typeof client.api.auth.login["$post"]>;

export const useLogin = () => {
  const mutation = useMutation<
    ResponseType,
    Error,
    RequestType
  >({
    mutationFn: async ({ json }) => {
      const response = await client.api.auth.login["$post"]({ json })
      const data = await response.json();

      if (!response.ok) {
        const errorData = data as { error?: unknown };
        const message =
          typeof errorData.error === "string"
            ? errorData.error
            : "Nao foi possivel entrar.";

        throw new Error(message);
      }

      return data as ResponseType;
    },
  });

  return mutation;
}
