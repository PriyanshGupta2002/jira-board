"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { FC } from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}
const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  const pathName = usePathname();
  const isSignUp = pathName === "/sign-up";
  const isSignIn = pathName === "/sign-in";

  return (
    <main className="bg-neutral-100 min-h-screen">
      <div className="mx-auto max-w-screen-2xl p-4">
        <nav className="flex items-center justify-between">
          <Image src={"/logo.svg"} alt="logo" width={152} height={56} />
          <Button asChild variant={"secondary"}>
            <Link href={`${isSignIn ? "sign-up" : isSignUp ? "sign-in" : ""}`}>
              {" "}
              {`${isSignIn ? "Sign Up" : isSignUp ? "Sign In" : ""}`}
            </Link>
          </Button>
        </nav>
        <div className="flex flex-col items-center justify-center pt-4 md:pt-14">
          {children}
        </div>
      </div>
    </main>
  );
};

export default AuthLayout;
