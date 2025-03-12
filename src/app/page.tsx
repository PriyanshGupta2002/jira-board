import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const page = () => {
  return (
    <div className="flex items-center p-3">
      <Button variant={"primary"} size={"lg"}>
        Primary
      </Button>
      <Input />
      <Button variant={"destructive"}>Destructive</Button>
      <Button variant={"ghost"}>Ghost</Button>
      <Button variant={"muted"}>Muted</Button>
      <Button variant={"outline"}>Outline</Button>
      <Button variant={"secondary"}>Secondary</Button>
      <Button variant={"tertiary"}>Tertiary</Button>
    </div>
  );
};

export default page;
