"use client";

import { Badge } from "@/components/ui/badge";
import { SocialButton } from "@/components/ui/social-button";
import { DATA } from "@/data/data";
import { BLUR_FADE_DELAY } from "@/lib/utils";
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import Markdown from "react-markdown";
import dynamic from "next/dynamic";
import LazySection from "@/components/LazySection";
import { useState } from "react";
import { BadgeAnimated } from "@/components/ui/badgeanimation";

const Lanyard = dynamic(() => import("@/components/Lanyard"));
const RotatingText = dynamic(() => import("@/components/RotatingText"));
const BlurFade = dynamic(() => import("@/components/magicui/blur-fade"));
const BlurFadeText = dynamic(
  () => import("@/components/magicui/blur-fade-text")
);
const ProjectCard = dynamic(() => import("@/components/project-card"));
const BootcampsCard = dynamic(() => import("@/components/bootcamps-card"));
const CertificateCard = dynamic(() => import("@/components/certificate-card"));
const ResumeCard = dynamic(() => import("@/components/resume-card"));

export default function Page() {
  const [selectedType, setSelectedType] = useState(DATA.projects[0].type);
  const filteredProjects =
    DATA.projects.find((p) => p.type === selectedType)?.projects || [];

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero" className="relative overflow-visible">
        <div className="mx-auto w-full max-w-2xl space-y-8 relative">
          <div className="gap-2 flex justify-between items-center relative">
            <div className="flex-col flex flex-1 space-y-3 relative z-10">
              <div className="flex items-center flex-wrap gap-2 leading-none">
                <BlurFadeText
                  delay={BLUR_FADE_DELAY * 3}
                  className="text-4xl sm:text-5xl xl:text-5xl font-bold tracking-tighter"
                  yOffset={8}
                  text={`Hi, I'm `}
                />
                <BlurFade delay={BLUR_FADE_DELAY * 13}>
                  {" "}
                  <RotatingText
                    texts={["Ofren", "Dialsa"]}
                    mainClassName={`
              inline-flex items-center justify-center
              px-3 sm:px-3 md:px-4 
              bg-black text-white 
              dark:bg-white dark:text-black
              overflow-hidden py-0.5 sm:py-1 md:py-1.5 
              rounded-lg 
              text-4xl sm:text-5xl xl:text-5xl font-bold 
              leading-none
              transition-colors duration-300 translate-y-2
            `}
                    staggerFrom={"last"}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden pb-0.5"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={2000}
                  />
                </BlurFade>
                <BlurFadeText
                  delay={BLUR_FADE_DELAY * 3}
                  className="text-4xl sm:text-5xl xl:text-5xl font-bold tracking-tighter"
                  yOffset={8}
                  text={`👋`}
                />
              </div>

              <BlurFadeText
                className="max-w-[600px] md:text-lg"
                delay={BLUR_FADE_DELAY * 3 + 0.2}
                text={DATA.description}
              />
            </div>

            <div
              className="flex justify-center items-center bg-transparent size-32 md:size-40 -translate-y-6 md:-translate-y-8 relative z-0"
              style={{
                pointerEvents: "auto",
                isolation: "isolate",
              }}
            >
              <Lanyard position={[0, 0, 32]} gravity={[0, -40, 0]} />
            </div>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <LazySection>
        <section id="projects">
          <div className="space-y-2 w-full py-12">
            <BlurFade delay={BLUR_FADE_DELAY * 11}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                    My Projects
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Check out my latest work
                  </h2>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    I&apos;ve worked on a variety of projects, from simple to
                    complex web, mobile and backend applications. Here are a few
                    of my favorites.
                  </p>
                </div>
              </div>
            </BlurFade>

            <BlurFade delay={BLUR_FADE_DELAY * 12}>
              <div className="flex justify-center space-x-3 overflow-x-auto py-4">
                {DATA.projects.map((p) => (
                  <BadgeAnimated
                    key={p.type}
                    variant={selectedType === p.type ? "default" : "outline"}
                    active={selectedType === p.type}
                    onClick={() => setSelectedType(p.type)}
                  >
                    {p.type}
                  </BadgeAnimated>
                ))}
              </div>
            </BlurFade>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
              {filteredProjects.map((project, id) => (
                <BlurFade
                  key={project.title}
                  delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                >
                  <ProjectCard
                    href={project.href}
                    title={project.title}
                    description={project.description}
                    dates={project.dates}
                    tags={project.technologies}
                    image={project.image}
                    video={project.video || ""}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </div>
          </div>

          <BlurFade delay={BLUR_FADE_DELAY * 20}>
            <div className="text-center text-muted-foreground text-sm sm:text-base">
              {"Note: You can explore more of my projects on my GitHub profile :)"}
            </div>
          </BlurFade>
        </section>
      </LazySection>
      <LazySection>
        <section id="bootcamps">
          <div className="space-y-12 w-full">
            <BlurFade delay={BLUR_FADE_DELAY * 13}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                    Bootcamps and Professional Training
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Always learning, always improving
                  </h2>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    During my time in university, I attended{" "}
                    {DATA.bootcamps.length}+ bootcamps and professional training
                    programs to strengthen my technical and problem-solving
                    skills.
                  </p>
                </div>
              </div>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 14}>
              <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
                {DATA.bootcamps.map((project, id) => (
                  <BlurFade
                    key={project.title + project.dates}
                    delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                  >
                    <BootcampsCard
                      title={project.title}
                      description={project.description}
                      location={project.location}
                      dates={project.dates}
                      image={project.image}
                      links={project.links}
                    />
                  </BlurFade>
                ))}
              </ul>
            </BlurFade>
          </div>
        </section>
      </LazySection>
      <LazySection>
        <section id="certificates">
          <div className="space-y-12 w-full">
            <BlurFade delay={BLUR_FADE_DELAY * 11}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                    My Certificates
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Achievements & Learning Journey
                  </h2>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Here are some of the certifications I’ve earned while
                    sharpening my technical skills and contributing to
                    real-world projects. I’ve gained 21+ certifications during
                    my learning journey in web, mobile, and backend development.
                  </p>
                </div>
              </div>
            </BlurFade>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-[800px] mx-auto">
              {DATA.certificates.map((cert, idx) => (
                <BlurFade
                  key={cert.title}
                  delay={BLUR_FADE_DELAY * 12 + idx * 0.05}
                >
                  <CertificateCard {...cert} />
                </BlurFade>
              ))}
            </div>
          </div>
          <BlurFade delay={BLUR_FADE_DELAY * 20}>
            <div className="text-center text-muted-foreground text-sm sm:text-base mt-6">
              I have more than{" "}
              <span className="font-semibold text-foreground">20+</span>{" "}
              certificates —{" "}
              <Link
                href="https://www.linkedin.com/in/ofren-dialsa/details/certifications/"
                target="_blank"
                className="underline underline-offset-4 hover:text-foreground transition-colors"
              >
                view them all on my LinkedIn
              </Link>
              .
            </div>
          </BlurFade>
        </section>
      </LazySection>
      <LazySection>
        <section
          id="contact"
          className="px-4 sm:px-6 pb-12 md:pb-20 bg-background"
        >
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
            <BlurFade delay={BLUR_FADE_DELAY * 16}>
              <div className="space-y-3">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Contact
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 tracking-tight">
                  Get in Touch
                </h2>

                <p className="mx-auto max-w-[600px] text-muted-foreground text-base sm:text-lg leading-relaxed px-2">
                  Feel free to contact me directly for{" "}
                  <span className="font-semibold text-foreground">
                    work or freelance
                  </span>{" "}
                  at{" "}
                  <Link
                    href="mailto:ofrendialsa.work@gmail.com"
                    className="text-black dark:text-white underline underline-offset-4 hover:text-primary transition-colors"
                  >
                    ofrendialsa.work@gmail.com
                  </Link>
                  .
                </p>
              </div>

              <p className="text-muted-foreground mt-8 text-sm sm:text-base">
                or you can DM me directly at:
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6 w-full px-2">
                <SocialButton
                  href="https://www.github.com/OfrenDialsa"
                  icon={<GitHubLogoIcon className="w-4 h-4" />}
                  label="GitHub"
                />

                <SocialButton
                  href="https://www.linkedin.com/in/ofren-dialsa/"
                  icon={<LinkedInLogoIcon className="w-4 h-4" />}
                  label="LinkedIn"
                />

                <SocialButton
                  href="https://www.instagram.com/ofren_"
                  icon={<InstagramLogoIcon className="w-4 h-4" />}
                  label="Instagram"
                />
              </div>
            </BlurFade>
          </div>
        </section>
      </LazySection>
    </main>
  );
}
