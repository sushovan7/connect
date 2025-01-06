import Link from "next/link";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import { currentUser } from "@clerk/nextjs/server";
import { syncUser } from "@/app/actions/user.action";

async function Navbar() {
  const user = await currentUser();
  console.log(user);
  if (user) await syncUser();
  console.log("hello");
  return (
    <nav className="w-full sticky top-0 border-b py-4 bg-background/95 background-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="max-w-7xl  mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-xl font-bold text-primary font-mono tracking-wider"
            >
              Connect
            </Link>
          </div>
          <DesktopNavbar />
          <MobileNavbar />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
