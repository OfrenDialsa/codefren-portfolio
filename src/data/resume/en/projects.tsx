import { Icons } from "@/components/icons";
import { Paperclip } from "lucide-react";

export const projects = [
  {
    type: "Website",
    projects: [
      {
        title: "Gentamin",
        href: "https://gentamin.vercel.app/",
        dates: "July 2025 - November 2025",
        active: true,
        description:
          "Multi-format book platform (PDF, audio, video) with clean, interactive UI and powerful content management features.",
        technologies: [
          "Next.js",
          "Typescript",
          "PostgreSQL",
          "Supabase",
          "TailwindCSS",
          "Shadcn UI",
        ],
        links: [
          {
            type: "Website",
            href: "https://gentamin.vercel.app/",
            icon: <Icons.globe className="size-3" />,
          },
        ],
        image: "",
        video:
          "https://qfnp44np2u2fkofa.public.blob.vercel-storage.com/Gentamin",
      },
      {
        title: "AksaLaundy",
        href: "https://github.com/OfrenDialsa/aksaLaundry",
        dates: "April 2025 - May 2025",
        active: true,
        description:
          "AksaLaundy is a laundry service website that offers online ordering, real-time order tracking, and secure payment options.",
        technologies: [
          "PHP",
          "Laravel",
          "MySQL",
          "Midtrans",
          "Google Maps API",
          "TailwindCSS",
        ],
        links: [
          {
            type: "Source Code",
            href: "https://github.com/OfrenDialsa/aksaLaundry",
            icon: <Icons.github className="size-3" />,
          },
        ],
        image: "https://raw.githubusercontent.com/OfrenDialsa/Mediacontent/refs/heads/main/Portfolio/AksaLaundy.webp",
        video:
          "",
      },
    ],
  },
  {
    type: "Backend",
    projects: [
      {
        title: "Forum API",
        href: "https://www.github.com/OfrenDialsa/ForumAPI",
        dates: "November 2025 - December 2025",
        active: true,
        description:
          "Forum API for managing Thread, comments, likes, users and etc.",
        technologies: [
          "Hapi.js",
          "Amazon EC2",
          "Amazon RDS",
          "CI/CD Pipeline",
          "PostgreSQL",
          "Test driven development",
          "Clean Architecture",
          "Swagger",
        ],
        links: [
          {
            type: "Documentation",
            href: "https://forumapi.codefren.site/documentation",
            icon: <Paperclip className="size-3" />,
          },
          {
            type: "Source Code",
            href: "https://www.github.com/OfrenDialsa/ForumAPI",
            icon: <Icons.github className="size-3" />,
          },
        ],
        image:
          "https://raw.githubusercontent.com/OfrenDialsa/Mediacontent/33bdf74b7877505d074caa3253272e2e7b21e58b/Portfolio/ForumAPI.png",
        video: "",
      },
      {
        title: "Neromerce API",
        href: "https://www.github.com/OfrenDialsa/ForumAPI",
        dates: "December 2025 - Present",
        active: true,
        description:
          "Neromerce API is a clean and robust RESTful API for managing products, orders, payments, and more.",
        technologies: [
          "Golang",
          "Gin Gonic",
          "PostgreSQL",
          "Docker",
          "Clean Architecture",
          "Test driven development",
        ],
        links: [
          {
            type: "Source Code",
            href: "https://www.github.com/OfrenDialsa/Neromerce-api",
            icon: <Icons.github className="size-3" />,
          },
        ],
        image:
          "https://raw.githubusercontent.com/OfrenDialsa/Mediacontent/refs/heads/main/Portfolio/Gin%20Gonic.png",
        video: "",
      },
      {
        title: "OpenMusic API",
        href: "https://github.com/OfrenDialsa/openmusic-api",
        dates: "October 2025 - October 2025",
        active: true,
        description:
          "Openmusic API is a RESTful API service for managing music albums, songs, etc. built with Hapi.js framework and many more.",
        technologies: [
          "Hapi.js",
          "Amazon S3",
          "RabbitMQ",
          "Redis",
          "PostgreSQL",
        ],
        links: [
          {
            type: "Source Code",
            href: "https://github.com/OfrenDialsa/openmusic-api",
            icon: <Icons.github className="size-3" />,
          },
        ],
        image:
          "https://raw.githubusercontent.com/OfrenDialsa/Mediacontent/refs/heads/main/Portfolio/Hapi.png",
        video: "",
      },
      {
        title: "PerpusGo API",
        href: "https://www.github.com/OfrenDialsa/PerpusGo",
        dates: "March 2025 - Present",
        active: true,
        description:
          "PerpusGo API is a simple RESTful API Service for managing books, borrowing, and more.",
        technologies: [
          "Golang",
          "Gofiber",
          "PostgreSQL",
        ],
        links: [
          {
            type: "Source Code",
            href: "https://www.github.com/OfrenDialsa/PerpusGo",
            icon: <Icons.github className="size-3" />,
          },
        ],
        image:
          "https://raw.githubusercontent.com/OfrenDialsa/Mediacontent/refs/heads/main/Portfolio/Go%20Fiber.webp",
        video: "",
      },
    ],
  },
  {
    type: "Mobile",
    projects: [
      {
        title: "NeroBot",
        href: "https://www.github.com/OfrenDialsa/NeroBot",
        dates: "Jan 2025 - Present",
        active: true,
        description:
          "This Android app offers a fun and lively AI chat experience using Latest Gemini model, while also keeping users updated with the latest news using News API",
        technologies: [
          "Jetpack Compose",
          "Kotlin",
          "Koin",
          "Room",
          "DataStore",
          "Gemini API",
        ],
        links: [
          {
            type: "Source Code",
            href: "https://www.github.com/OfrenDialsa/NeroBot",
            icon: <Icons.github className="size-3" />,
          },
        ],
        image:
          "https://qfnp44np2u2fkofa.public.blob.vercel-storage.com/photo/Nerobot",
        video: "",
      },
    ],
  },
];
