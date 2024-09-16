"use client"

import { useState } from "react";
import Link from "next/link";
import SocialList from "./SocialList";
import { socials } from "./SocialList";
import { facebookSVG, xSVG, instagramSVG, youtubeSVG, tiktokSVG, snapchatSVG, emailSVG } from "@/public/images/svgIcons";
import { xMarkSVG } from "@/public/images/svgIcons";

export default function MobileMenu({ mobileMenuToggled, setMobileMenuToggled }) {
  const links = ["NEWS AND MEDIA", "TEAM", "SCHEDULE", "TICKETS", "Laker Girls", "Community", "Store", "Connect", "Careers"];

  return (
    <div
      className={`
        fixed top-0 right-0 h-full w-[300px] bg-grayBackground text-white z-40 transform
        ${mobileMenuToggled ? 'translate-x-0' : 'translate-x-full'}
        transition-transform duration-300 ease-in-out lg:hidden block
      `}
    >
      <div className="flex justify-between items-center border-b-[1px] border-gray-900">
        {/* Close Button */}
        <button
          className="ml-auto p-2"
          onClick={() => setMobileMenuToggled(false)}
        >
          {xMarkSVG}
        </button>
      </div>

      {/* Links */}
      <nav>
        <ul flex="flex flex-col">
          {links.map((link, index) => {
            return (
              <li
                key={index}
                className={`${index < 4 ? "font-bold" : "font-thin"} text-[24px] border-b-[1px] border-gray-900 px-6 py-3`}
                >
                <Link
                  href="#"
                >
                  {link}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Social Media List */}
        <ul className="flex justify-between px-6 py-10">
          {socials.map((social, index) => {
            return (
              <li key={index}>
                <Link
                  href="#"
                >
                  {social}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
};