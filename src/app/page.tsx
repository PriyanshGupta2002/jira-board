"use client";
import { Button } from "@/components/ui/button";
import { useCurrent } from "@/features/auth/api/use-current";
import { useLogout } from "@/features/auth/api/use-logout";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Home = () => {
  const { data, isLoading } = useCurrent();
  const router = useRouter();
  const { mutate } = useLogout();

  useEffect(() => {
    if (!data && !isLoading) {
      router.push("/sign-in");
    }
  }, [data, isLoading, router]);

  return (
    <div className="flex items-center p-3">
      Only visible to authorized users
      <Button onClick={() => mutate()}>Logout</Button>
    </div>
  );
};

export default Home;
