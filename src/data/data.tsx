import { AwardIcon, Code2Icon, FolderIcon, HomeIcon } from "lucide-react";
import { resumeData } from "./resume/resumeData";

export const DATA = {
  name: "Ofren Dialsa",
  initials: "OD",
  url: "https://portfolio.codefren.site",
  location: "Kerinci, Jambi, Indonesia",
  locationLink: "https://www.google.com/maps/place/Jambi",
  description:
    "an Information Systems undergraduate at Jambi University with a strong interest in technology and innovation.",
  summary:
    "I have experience in software development across mobile, web, and backend projects, gained through internship and programs like [Bangkit Academy](#bootcamps) and [AWS Backend Academy](#bootcamps). I enjoy learning new technologies, solving real-world problems, and collaborating to build impactful digital solutions. feel free to [get in touch](#contact)",
  avatarUrl: "/me.webp",
  navbar: [
    { href: "#hero", icon: HomeIcon, label: "Home" },
    { href: "#projects", icon: FolderIcon, label: "Projects" },
    { href: "#bootcamps", icon: Code2Icon, label: "Bootcamps" },
    { href: "#certificates", icon: AwardIcon, label: "Certificates" },
  ],

  ...resumeData
} as const;