import { AwardIcon, Code2Icon, FolderIcon, HomeIcon } from "lucide-react";
import { resumeData } from "./resume/resumeData";

export const DATA = {
  name: "Ofren Dialsa",
  initials: "OD",
  url: "https://portfolio.codefren.site",
  location: "Kerinci, Jambi, Indonesia",
  locationLink: "https://www.google.com/maps/place/Jambi",
  description:
    "a Full Stack Developer and Information Systems undergraduate at Jambi University focused on scalable web and mobile apps.",
  summary:
    "I am a Full Stack Developer with a strong backend focus, experienced in building APIs, managing databases, and deploying applications to cloud environments. I also enjoy crafting responsive and accessible user interfaces for web and mobile. Through programs like [Bangkit Academy](#bootcamps) and [AWS Backend Academy](#bootcamps), I have developed production-ready systems with clean architecture and scalable design. Let’s build something impactful together [get in touch](#contact).",
  avatarUrl: "/me.webp",
  navbar: [
    { href: "#hero", icon: HomeIcon, label: "Home" },
    { href: "#projects", icon: FolderIcon, label: "Projects" },
    { href: "#bootcamps", icon: Code2Icon, label: "Bootcamps" },
    { href: "#certificates", icon: AwardIcon, label: "Certificates" },
  ],

  ...resumeData
} as const;