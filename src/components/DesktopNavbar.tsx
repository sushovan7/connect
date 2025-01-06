import { currentUser } from "@clerk/nextjs/server";
import { Button } from "./ui/button";
import Link from "next/link";
import { Bell, HomeIcon, User } from "lucide-react";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { ToggleTheme } from "./ToggleTheme";

async function DesktopNavbar() {
  const user = await currentUser();

  return (
    <div className="hidden md:flex items-center gap-4">
      <Button variant="ghost" className="flex items-center gap-2" asChild>
        <Link href="/">
          <HomeIcon className="w-4 h-4" />
          <span className="hidden lg:inline">Home</span>
        </Link>
      </Button>

      {user ? (
        <>
          {" "}
          <Button variant="ghost" className="flex items-center gap-2" asChild>
            <Link href="/notifications">
              <Bell className="w-4 h-4" />
              <span className="hidden lg:inline">Notifications</span>
            </Link>
          </Button>{" "}
          <Button variant="ghost" className="flex items-center gap-2" asChild>
            <Link href="/profile">
              <User className="w-4 h-4" />
              <span className="hidden lg:inline">Profile</span>
            </Link>
          </Button>
          <UserButton />
        </>
      ) : (
        <>
          <SignInButton mode="modal">
            <Button variant="default">Sign In</Button>
          </SignInButton>
        </>
      )}
      <ToggleTheme />
    </div>
  );
}

export default DesktopNavbar;
