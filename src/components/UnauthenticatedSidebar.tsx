import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import * as React from "react";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function UnauthenticatedSidebar() {
  return (
    <div className=" sticky top-20">
      <Card className="px-2 py-6">
        <CardHeader className="flex flex-col items-center">
          <CardTitle>Welcome Back!</CardTitle>
          <CardDescription className="text-center">
            Login to access your profile and connect with others
          </CardDescription>
        </CardHeader>
        <div className="flex flex-col gap-2">
          {" "}
          <SignInButton mode="modal">
            <Button variant="outline" className="w-full">
              Login
            </Button>
          </SignInButton>
          <SignUpButton mode="modal">
            <Button variant="default" className="w-full">
              Sign Up
            </Button>
          </SignUpButton>
        </div>
      </Card>
    </div>
  );
}

export default UnauthenticatedSidebar;
