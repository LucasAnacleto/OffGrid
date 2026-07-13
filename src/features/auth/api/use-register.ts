import { useMutation } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";

import { client } from "@/lib/rpc";

type ResponseType = InferResponseType<typeof client.api.auth.register["$post"], 201>;
type RequestType = InferRequestType<typeof client.api.auth.register["$post"]>;

export const useRegister = () => {
  const mutation = useMutation<
    ResponseType,
    Error,
    RequestType
  >({
    mutationFn: async ({ json }) => {
      const response = await client.api.auth.register["$post"]({ json })
      const data = await response.json();

      if (!response.ok) {
        const errorData = data as { error?: unknown };
        const message =
          typeof errorData.error === "string"
            ? errorData.error
            : "Nao foi possivel criar conta.";

        throw new Error(message);
      }

      return data as ResponseType;
    },
  });

  return mutation;
}
