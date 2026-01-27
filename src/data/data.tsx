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
    "I am a Full Stack Developer with a strong backend focus, currently interning as a [Backend Developer Intern](#work), at [Assistx Enterprise](https://assistxenterprise.ai/). I build scalable APIs, manage databases, and deploy cloud-based systems, with hands-on experience delivering production-ready solutions through programs like [Bangkit Academy](#bootcamps) and [AWS Backend Academy](#bootcamps), Let’s build something impactful [get in touch](#contact).",
  avatarUrl: "/me.webp",
  navbar: [
    { href: "#hero", icon: HomeIcon, label: "Home" },
    { href: "#projects", icon: FolderIcon, label: "Projects" },
    { href: "#bootcamps", icon: Code2Icon, label: "Bootcamps" },
    { href: "#certificates", icon: AwardIcon, label: "Certificates" },
  ],

  ...resumeData
} as const;