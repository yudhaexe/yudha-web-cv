"use client";
import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
} from "lucide-react";
import React from "react";

export function Footer() {
  return (
    <footer className="text-center p-4 text-white">
      <p>Lets get in touch in social media:</p>
      <div className="flex justify-center space-x-2 mt-4">
        <a href="#">
          <GithubIcon className="text-white hover:text-gray-400" />
        </a>
        <a href="#">
          <FacebookIcon className="text-white hover:text-gray-400" />
        </a>
        <a href="#">
          <InstagramIcon className="text-white hover:text-gray-400" />
        </a>
        <a href="#">
          <LinkedinIcon className="text-white hover:text-gray-400" />
        </a>
      </div>
    </footer>
  );
}
