"use client";
import Link from "next/link";
import React from "react";

export function Navbar() {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center text-white">
        <h1 className="text-3xl font-bold">Yudha&apos;s Hideout</h1>
        <nav>
          <ul className="space-x-4 hidden sm:flex">
            <li>
              <Link
                className="block transform hover:scale-110 transition-all"
                href="/"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="block transform hover:scale-110 transition-all"
                href="/portfolio"
              >
                Portfolio
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
