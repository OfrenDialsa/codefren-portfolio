import { bootcamps } from "./resume/bootcamps";
import { certificates } from "./resume/certificates";
import { contact } from "./resume/contact";
import { education } from "./resume/education";
import { projects } from "./resume/projects";
import { skills } from "./resume/skills";
import { work } from "./resume/work";

export const resumeData = {
  skills,
  contact,
  work,
  education,
  projects,
  bootcamps,
  certificates,
} as const;
