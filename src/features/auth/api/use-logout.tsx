import { client } from "@/lib/rpc";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { InferResponseType } from "hono";

type Response = InferResponseType<(typeof client.api.auth.logout)["$post"]>;

export const useLogout = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation<Response, Error>({
    mutationFn: async () => {
      const response = await client.api.auth.logout["$post"]();
      return await response.json();
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["current"],
      });
    },
  });
  return mutation;
};
