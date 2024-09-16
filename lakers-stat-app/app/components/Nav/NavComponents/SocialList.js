import Link from "next/link";
import { facebookSVG, xSVG, youtubeSVG, tiktokSVG, snapchatSVG, emailSVG } from "../../../../public/images/svgIcons";

export default function SocialList() {
  const socials = [ facebookSVG, xSVG, youtubeSVG, tiktokSVG, snapchatSVG, emailSVG  ]
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

