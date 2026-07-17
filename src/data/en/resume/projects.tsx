import { Icons } from "@/components/icons";
import { Globe, Paperclip } from "lucide-react";

export const projects = [
  {
    type: "Website",
    projects: [
      {
        title: "Codefren Portfolio",
        href: "https://github.com/OfrenDialsa/CodefrenPortfolio",
        dates: "November 2025 - Present",
        active: true,
        description:
          "A modern and interactive personal portfolio showcasing my projects, skills, and experience as a software engineer, built with performance, accessibility, and clean design in mind. Includes a secure contact form with domain-verified email delivery.",
        technologies: [
          "Next.js",
          "Typescript",
          "Vercel",
          "Resend (Email Delivery)",
          "TailwindCSS",
          "Magic UI",
        ],
        links: [
          {
            type: "Website",
            href: "https://portfolio.codefren.site",
            icon: <Icons.globe className="size-3" />,
          },
          {
            type: "Source Code",
            href: "https://github.com/OfrenDialsa/CodeFrenPortfolio",
            icon: <Icons.github className="size-3" />,
          },
        ],
        image:
          "https://raw.githubusercontent.com/OfrenDialsa/Mediacontent/refs/heads/main/Portfolio/CodeFren.webp",
        video: "",
      },
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
        image:
          "https://raw.githubusercontent.com/OfrenDialsa/Mediacontent/refs/heads/main/Portfolio/AksaLaundy.webp",
        video: "",
      },
      {
        title: "Weather App",
        href: "https://github.com/OfrenDialsa/Weather-app",
        dates: "May 2024 - June 2024",
        active: true,
        description:
          "Weather Web Application allow user to search and display weather data from around the globe",
        technologies: [
          "Next.js",
          "Typescript",
          "TailwindCSS",
          "OpenWeather api",
        ],
        links: [
          {
            type: "Website",
            href: "https://weather-app-ofren.vercel.app/",
            icon: <Icons.globe className="size-3" />,
          },
          {
            type: "Source Code",
            href: "https://github.com/OfrenDialsa/Weather-app",
            icon: <Icons.github className="size-3" />,
          },
        ],
        image:
          "https://raw.githubusercontent.com/OfrenDialsa/Mediacontent/refs/heads/main/Portfolio/weatherapp.webp",
        video: "",
      },
    ],
  },
  {
    type: "Backend",
    projects: [
      {
        title: "Ezfiles AI",
        href: "",
        dates: "January - April 2026",
        active: true,
        description:
          "Collaborated closely with senior developers to design and implement the admin dashboard API for monitoring Food Analyze and file conversion usage metrics. Independently strengthened backend reliability by writing extensive unit tests, achieving over 80% code coverage across service layers.",
        technologies: [
          "Golang",
          "Gin",
          "PostgreSQL",
          "NSQ",
          "OAuth2",
          "Prometheus",
          "Docker",
          "Zerolog",
          "Viper",
          "Swagger",
          "Sentry",
          "Layered Architecture",
        ],
        links: [
          {
            type: "Live website",
            href: "https://dev.ezfiles.ai/",
            icon: <Globe className="size-3" />,
          },
        ],
        image:
          "https://raw.githubusercontent.com/OfrenDialsa/Mediacontent/refs/heads/main/Portfolio/ezfiles.webp",
        video: "",
        org: {
          text: "Assistx Enterprise",
          href: "https://assistxenterprise.ai/",
        },
      },
      {
        title: "Ezfiles Enterprise",
        href: "https://www.github.com/OfrenDialsa/ForumAPI",
        dates: "January - April 2026",
        active: true,
        description:
          "Engineered the foundational API structure, driving the development of the Auth system and granular Role-Based Access Control (RBAC). Built the pipeline workflow module, enabling users to orchestrate and execute chained custom tasks for file processing, while ensuring reliability by writing comprehensive unit tests for every developed feature.",
        technologies: [
          "Golang",
          "Gin",
          "PostgreSQL",
          "Redis",
          "OAuth2",
          "Docker",
          "S3 Compatible storage",
          "Zerolog",
          "Viper",
          "Swagger",
          "Layered Architecture",
        ],
        links: [],
        image:
          "https://raw.githubusercontent.com/OfrenDialsa/Mediacontent/refs/heads/main/Portfolio/gopher3.webp",
        video: "",
        org: {
          text: "Assistx Enterprise",
          href: "https://assistxenterprise.ai/",
        },
      },
      {
        title: "Ezfiles APIaaS",
        href: "https://www.github.com/OfrenDialsa/ForumAPI",
        dates: "January - April 2026",
        active: true,
        description:
          "Designed and implemented secure Authentication and granular Role-Based Access Control (RBAC) modules. Engineered a high-performance, in-memory rate limiter utilizing the sliding window algorithm to prevent API abuse per user IP, while ensuring reliability by writing comprehensive unit tests for every developed feature.",
        technologies: [
          "Golang",
          "Gin",
          "PostgreSQL",
          "Docker",
          "Swagger",
          "S3 Compatible storage",
          "Zerolog",
          "Viper",
          "Layered Architecture",
        ],
        links: [],
        image:
          "https://raw.githubusercontent.com/OfrenDialsa/Mediacontent/refs/heads/main/Portfolio/Gin%20Gonic.png",
        video: "",
        org: {
          text: "Assistx Enterprise",
          href: "https://assistxenterprise.ai/",
        },
      },
      {
        title: "AssistX Vision API",
        href: "",
        dates: "March - April 2026",
        active: true,
        description:
          "Strengthened system reliability by implementing comprehensive unit testing for the Core Foundation & Infrastructure Repositories. Designed robust test suites for the repository layer to secure data integrity, alongside validating the end-to-end integration of the AI Alert Service.",
        technologies: [
          "Golang",
          "Gin",
          "MongoDB",
          "Websocket",
          "NSQ",
          "Redis",
          "PostgreSQL",
        ],
        links: [],
        image:
          "https://raw.githubusercontent.com/OfrenDialsa/Mediacontent/refs/heads/main/Portfolio/assistx%20vision.webp",
        video: "",
        org: {
          text: "Assistx Enterprise",
          href: "https://assistxenterprise.ai/",
        },
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
