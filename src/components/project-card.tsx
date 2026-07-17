import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
  org?: {
    text: string;
    href: string;
  };
}

export default function ProjectCard({
  title,
  description,
  dates,
  tags,
  image,
  video,
  links,
  org,
}: Props) {
  return (
    <Dialog>
      <Card className="flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full group relative">
        <DialogTrigger asChild>
          <button
            className="absolute inset-0 w-full h-[calc(100%-48px)] z-10 cursor-pointer text-left items-start justify-start bg-transparent border-none p-0 m-0 focus-visible:outline-none"
            aria-label={`View details for ${title}`}
          />
        </DialogTrigger>

        <div className="relative overflow-hidden">
          {video && (
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="pointer-events-none mx-auto h-40 w-full object-cover object-top"
            />
          )}
          {image && (
            <Image
              src={image}
              alt={title}
              width={500}
              height={300}
              className="h-40 w-full overflow-hidden object-cover object-top transition-transform duration-300 group-hover:scale-105"
            />
          )}
        </div>

        <CardHeader className="px-2">
          <div className="space-y-1">
            <CardTitle className="mt-1 text-base group-hover:underline">
              {title}
            </CardTitle>
            <time className="font-sans text-xs">{dates}</time>
            <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert line-clamp-3">
              {description}
            </Markdown>
          </div>
        </CardHeader>

        <CardContent className="flex flex-col px-2 flex-grow">
          {tags && tags.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1">
              {tags.slice(0, 5).map((tag) => (
                <Badge
                  className="px-1 py-0 text-[10px]"
                  variant="secondary"
                  key={tag}
                >
                  {tag}
                </Badge>
              ))}
              {tags.length > 5 && (
                <Badge className="px-1 py-0 text-[10px]" variant="outline">
                  +{tags.length - 5}
                </Badge>
              )}
            </div>
          )}

          {org && (
            <div className="mt-auto pt-2 text-[10px] text-muted-foreground font-sans">
              <span className="font-semibold text-foreground">Org: </span>{" "}
              <span className="underline underline-offset-4 text-foreground">
                {org.text}
              </span>
            </div>
          )}
        </CardContent>

        <CardFooter className="px-2 pb-2 mt-auto z-20 relative">
          {links && links.length > 0 && (
            <div className="flex flex-row flex-wrap items-start gap-1">
              {links.map((link, idx) => (
                <Link
                  href={link.href}
                  key={idx}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Badge className="flex gap-2 px-2 py-1 text-[10px] cursor-pointer">
                    {link.icon}
                    {link.type}
                  </Badge>
                </Link>
              ))}
            </div>
          )}
        </CardFooter>
      </Card>

      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto p-0 gap-0">
        <DialogHeader className="p-6 pb-2">
          <DialogTitle className="text-xl font-bold">{title}</DialogTitle>
          <time className="font-sans text-xs text-muted-foreground block mt-1">
            {dates}
          </time>
        </DialogHeader>

        <div className="px-6 pb-6 space-y-4">
          {image && (
            <div className="relative rounded-lg overflow-hidden border max-h-[280px]">
              <Image
                src={image}
                alt={title}
                width={600}
                height={350}
                className="w-full h-full object-cover object-center"
              />
            </div>
          )}

          <div className="border-t pt-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
              Project Overview
            </h4>
            <Markdown className="prose dark:prose-invert max-w-full font-sans text-sm text-foreground/90 leading-relaxed">
              {description}
            </Markdown>
          </div>

          {tags && tags.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-1">
                {tags.map((tag) => (
                  <Badge
                    variant="secondary"
                    key={tag}
                    className="text-xs px-2 py-0.5"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {org && (
            <div className="text-xs font-sans text-muted-foreground border-t pt-3 flex justify-between items-center">
              <div>
                <span className="font-medium text-foreground">
                  Developed at:
                </span>{" "}
                <Link
                  href={org.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 text-primary"
                >
                  {org.text}
                </Link>
              </div>
            </div>
          )}

          {links && links.length > 0 && (
            <div className="flex flex-row flex-wrap items-center gap-2 pt-2">
              {links.map((link, idx) => (
                <Link
                  href={link.href}
                  key={idx}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial"
                >
                  <Badge className="flex items-center justify-center gap-2 px-3 py-2 text-xs w-full cursor-pointer bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                    {link.icon}
                    {link.type}
                  </Badge>
                </Link>
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
