import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectCaseStudyPage } from "@/components/work/ProjectCaseStudyPage";
import { getProject, projects } from "@/content/projects";

type ProjectParams = {
  slug: string;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<ProjectParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project" };
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectRoute({
  params,
}: {
  params: Promise<ProjectParams>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  return <ProjectCaseStudyPage project={project} />;
}
