import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

interface Props {
  title: string;
  organization: string;
  date: string;
  description?: string;
  image?: string;
  link?: string;
  tags?: readonly string[];
  className?: string;
}

export default function CertificateCard({
  title,
  organization,
  date,
  description,
  image,
  link,
  tags,
  className,
}: Props) {
  return (
    <Card
      className={cn(
        "flex flex-col overflow-hidden border hover:shadow-md transition-all duration-300 ease-out h-full",
        className
      )}
    >
      {image && (
        <Link href={link || "#"} target="_blank">
          <Image
            src={image}
            alt={title}
            width={500}
            height={300}
            className="h-40 w-full object-cover object-top transition-transform duration-300 hover:scale-105"
          />
        </Link>
      )}
      <CardHeader className="px-3 pt-3">
        <CardTitle className="text-base font-semibold">{title}</CardTitle>
        <p className="text-sm font-sans">{organization}</p>
        <time className="text-xs my-1 text-muted-foreground">{date}</time>
      </CardHeader>

      {description && (
        <CardContent className="px-3">
          <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
            {description}
          </Markdown>
        </CardContent>
      )}

      {tags && tags.length > 0 && (
        <CardContent className="px-3 pt-0 mt-2">
          <div className="flex flex-wrap gap-1">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="px-1 py-0 text-[10px]"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      )}

      {link && (
        <CardFooter className="px-3 pb-3">
          <Link href={link} target="_blank">
            <Badge variant="default" className="cursor-pointer gap-2 px-2 py-1 text-[10px]">
               <ArrowUpRight className="w-3 h-3" /> View Certificate 
            </Badge>
          </Link>
        </CardFooter>
      )}
    </Card>
  );
}
