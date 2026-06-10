"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
  const pathName = usePathname();
  const isActive = pathName === href;
  return (
    <>
      <li>
        <Link
          href={href}
          className={`transition-all duration-200 ${isActive ? "bg-purple-500/20 text-[#8b5cf6] border-purple-500/30 rounded-xl" : "hover:text-purple-400 active:bg-purple-500/20"} `}
        >
          {children}
        </Link>
      </li>
    </>
  );
};

export default NavLink;
