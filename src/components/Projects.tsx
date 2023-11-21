import { projects } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import React from "react";

type Project = (typeof projects)[0];

const Projects = () => {
  return (
    <section
      className="flex flex-col justify-center items-center"
      id="projects"
    >
      <h1 className="section-title mb-10">Projetos</h1>
      <div className="flex justify-center flex-wrap gap-x-8 gap-y-12">
        {projects.map((project) => (
          <Link
            href={`/project/${project.id}`}
            key={project.name}
            className="max-w-sm flex flex-col"
          >
            <Image
              width={370}
              height={268}
              src={project.bgSrc}
              alt={project.name}
              className="rounded-t-lg h-60"
              priority
            />
            <div className="w-full px-5 py-4 bg-brand-dark font-semibold text-left rounded-b-lg">
              <p className="text-brand mb-1">{project.name}</p>
              <span className="text-white text-xs">Ver mais ―</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Projects;
