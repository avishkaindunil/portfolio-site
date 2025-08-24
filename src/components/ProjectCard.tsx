"use client";

import { Project } from "../types/project";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="backdrop-blur-xl bg-white/30 border border-white/20 rounded-3xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
      <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
      <p className="text-gray-700 mb-4">{project.description}</p>
      <a
        href={project.link}
        target="_blank"
        className="text-blue-600 hover:underline"
      >
        View Project
      </a>
    </div>
  );
}
