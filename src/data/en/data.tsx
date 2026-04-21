import { AwardIcon, Code2Icon, FolderIcon, HomeIcon } from "lucide-react";
import { resumeData } from "./resumeData";

export const DATA = {
  name: "Ofren Dialsa",
  initials: "OD",
  url: "https://portfolio.codefren.site",
  location: "Kerinci, Jambi, Indonesia",
  locationLink: "https://www.google.com/maps/place/Jambi",
  description:
    "Backend Developer & Software Engineer passionate about scalable architecture, robust APIs, and building efficient, production-ready systems.",
  summary: `I am a [Software Engineer](#) specializing in [Backend Development](#), currently pursuing my Computer Degree (S.kom) at [Jambi University](#), please pray for me so i can complete it ASAP. 
    I build scalable APIs, manage databases, and deploy cloud-based systems, with hands-on experience delivering production-ready solutions through various internship and courses, 
    Let’s build something impactful, and feel free to [get in touch](#contact).`,
  avatarUrl: "/me.webp",
  iconUrl: "/nerodev.webp",
  navbar: [
    { href: "#hero", icon: HomeIcon, label: "Home" },
    { href: "#projects", icon: FolderIcon, label: "Projects" },
    { href: "#bootcamps", icon: Code2Icon, label: "Bootcamps" },
    { href: "#certificates", icon: AwardIcon, label: "Certificates" },
  ],

  ...resumeData,
} as const;
