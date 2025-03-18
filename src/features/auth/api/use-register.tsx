import { client } from "@/lib/rpc";
import { useMutation } from "@tanstack/react-query";

import type { InferRequestType, InferResponseType } from "hono/client";

type requestType = InferRequestType<(typeof client.api.auth.register)["$post"]>;
type responseType = InferResponseType<
  (typeof client.api.auth.register)["$post"]
>;

export const useRegister = () => {
  const mutation = useMutation<responseType, Error, requestType>({
    mutationFn: async ({ json }) => {
      const response = await client.api.auth.register["$post"]({ json });
      return await response.json();
    },
  });
  return mutation;
};
