/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="mx-auto flex max-w-6xl items-center justify-between py-10">
      <Link href="/">
        <img src="/images/Logo.png" alt="Positivus Logo" className="h-6" />
      </Link>
      <div className="flex items-center gap-16">
        <ul className="flex space-x-5">
          <li>About us</li>
          <li>Services</li>
          <li>Use Cases</li>
          <li>Pricing</li>
          <li>Blog</li>
        </ul>
        <button className="rounded-lg border border-[#191A23] bg-transparent px-4 py-2 text-black">
          Request a quote
        </button>
      </div>
    </header>
  );
};

export default Header;
