import { client } from "@/lib/rpc";
import { useMutation } from "@tanstack/react-query";
import type { InferRequestType, InferResponseType } from "hono";

type Response = InferResponseType<(typeof client.api.auth.login)["$post"]>;
type Request = InferRequestType<(typeof client.api.auth.login)["$post"]>;

export const useLogin = () => {
  const mutation = useMutation<Response, Error, Request>({
    mutationFn: async ({ json }) => {
      console.log(json);
      const response = await client.api.auth.login["$post"]({ json });
      console.log(response);
      return await response.json();
    },
  });
  return mutation;
};
