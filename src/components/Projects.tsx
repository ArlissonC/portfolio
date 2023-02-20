import { projects } from "@/data";
import Image from "next/image";
import { useState } from "react";
import Modal from "./Modal";
import { FiExternalLink } from "react-icons/fi";
import React from "react";

type Project = typeof projects[0];

const Projects = () => {
  const [openModalProject, setOpenModalProject] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project>(
    {} as Project,
  );

  const viewMore = (project: Project) => {
    setOpenModalProject(true);
    setSelectedProject(project);
  };

  return (
    <section
      className="flex flex-col justify-center items-center"
      id="projects"
    >
      <h1 className="section-title mb-10">Projetos</h1>
      <div className="flex justify-center flex-wrap gap-x-8 gap-y-12">
        {projects.map((project) => (
          <button
            key={project.name}
            className="max-w-sm flex flex-col"
            onClick={() => viewMore(project)}
          >
            <Image
              width={370}
              height={268}
              src={project.bgSrc}
              alt={project.name}
              className="rounded-t-lg"
              priority
            />
            <div className="w-full px-5 py-4 bg-brand-dark font-semibold text-left rounded-b-lg">
              <p className="text-brand mb-1">{project.name}</p>
              <span className="text-white text-xs">Ver mais ―</span>
            </div>
          </button>
        ))}
      </div>
      <Modal
        open={openModalProject}
        setOpen={setOpenModalProject}
        title={selectedProject.name}
      >
        <div className="flex flex-col md:flex-row justify-between items-center mb-20">
          <p className="font-semibold text-white max-w-xl text-sm text-center md:text-left">
            {selectedProject.about}
          </p>
          <div className="max-w-[16rem] text-center mt-8 md:mt-0">
            <p className="font-bold text-brand">Competências</p>
            {selectedProject.technologies?.map((tec) => (
              <React.Fragment key={tec}>
                <span className="text-white font-medium" key={tec}>
                  {tec}
                </span>
                <span className="last:hidden text-white font-medium">, </span>
              </React.Fragment>
            ))}
          </div>
        </div>
        <a
          href={selectedProject.webSiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 mb-4 w-fit self-end"
        >
          <p className="font-bold text-brand">Abrir projeto</p>
          <FiExternalLink className="text-brand text-2xl" />
        </a>
        <Image
          src={selectedProject.bgSrc}
          width={1510}
          height={925}
          alt={selectedProject.name}
          className="w-auto h-auto"
        />
      </Modal>
    </section>
  );
};

export default Projects;
