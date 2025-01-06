"use client";

import { useState } from "react";
import { ToggleTheme } from "./ToggleTheme";
import { SignInButton, SignOutButton, useAuth } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Menu, User, Bell, HomeIcon, LogOut, LogIn } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

function MobileNavbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { isSignedIn } = useAuth();

  return (
    <div className="flex items-center gap-2 md:hidden">
      <ToggleTheme />
      <Sheet open={showMobileMenu} onOpenChange={setShowMobileMenu}>
        <SheetTrigger asChild>
          <Button variant="outline">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="text-3xl font-mono tracking-wider mb-10">
              Connect
            </SheetTitle>
          </SheetHeader>
          <div className="flex flex-col items-start justify-center gap-4">
            <Button variant="ghost" className="flex items-center gap-2" asChild>
              <Link href="/">
                <HomeIcon className="w-6 h-6" />
                <span className="text-xl">Home</span>
              </Link>
            </Button>
            {isSignedIn ? (
              <>
                <Button
                  variant="ghost"
                  className="flex items-center gap-2"
                  asChild
                >
                  <Link href="/notifications">
                    <Bell className="w-6 h-6" />
                    <span className="text-xl">Notifications</span>
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  className="flex items-center gap-2"
                  asChild
                >
                  <Link href="/">
                    <User className="w-6 h-6" />
                    <span className="text-xl">Profile</span>
                  </Link>
                </Button>

                <SignOutButton>
                  <div>
                    {" "}
                    <Button
                      variant="ghost"
                      className="flex items-center gap-3 justify-start w-full"
                    >
                      <LogOut className="w-6 h-6" />
                      <span className="text-xl"> Log Out</span>
                    </Button>
                  </div>
                </SignOutButton>
              </>
            ) : (
              <>
                <SignInButton mode="modal">
                  <Button variant="default" className="w-full">
                    Sign In
                  </Button>
                </SignInButton>
              </>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MobileNavbar;
