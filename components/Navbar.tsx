"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { IoGlassesOutline } from "react-icons/io5";

// Classnames is a utility for conditionally joining classnames together
import classnames from "classnames";

const Navbar = () => {
  //hook to get the links
  const currentPath = usePathname();
  console.log(currentPath);

  // Array of links to display in the navbar
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];

  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <IoGlassesOutline size={40} />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={classnames({
              "text-zinc-900": currentPath === link.href,
              "text-zinc-500": currentPath !== link.href,
              "hover:text-zinc-800 transition-colors": true,
            })}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
