import { UserButton, currentUser, useUser } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
export default function NavbarMain() {
  const { user, isLoaded } = useUser();
  const router = useRouter();
  return (
    <div className="w-full bg-[#6B5DC0] h-[60px] flex items-center">
      <nav className="px-[12px] md:px-12 text-white py-2 flex justify-between items-center w-full">
        {/**LOGO HERE */}
        <div>
          <Link href={"/"}>
            <Image
              src={"/Logo white with text.png"}
              width={45}
              height={45}
              alt="Logo white with text"
            />
          </Link>
        </div>

        <div className="flex items-center justify-between gap-6">
          <Link href={"/"} className="text-md md:text-[20px]">
            Home
          </Link>
          {user && isLoaded ? (
            <UserButton />
          ) : (
            <Link
              href={router.pathname.includes("/login") ? "/register" : "/login"}
              className="text-md md:text-[20px]"
            >
              {router.pathname.includes("/register") ? "Login" : "Register"}
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
}
