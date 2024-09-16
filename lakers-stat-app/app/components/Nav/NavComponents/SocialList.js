import Link from "next/link";
import { facebookSVG, xSVG, instagramSVG, youtubeSVG, tiktokSVG, emailSVG } from "@/public/images/svgIcons";

export const socials = [facebookSVG, xSVG, instagramSVG, youtubeSVG, tiktokSVG, emailSVG];

export default function SocialList() {
  return (
    <ul className="xl:flex hidden items-center gap-4">
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
  )
}

