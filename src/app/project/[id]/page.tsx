"use client";

import Header from "@/components/Header";
import { projects } from "@/data";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import { FiExternalLink } from "react-icons/fi";
import Image from "next/image";
import { IoMdArrowRoundForward, IoMdArrowRoundBack } from "react-icons/io";
import Link from "next/link";

const Project = () => {
  const { id } = useParams();
  const router = useRouter();

  const currentProject = projects.find((p) => p.id == Number(id));
  return (
    <>
      <Header />
      <section className="mx-auto max-w-7xl px-2 mt-40">
        <div className="fixed top-2 lg:top-48 right-2 lg:right-20 z-50 bg-white p-4 rounded-lg shadow">
          <div className="flex gap-4 items-center">
            <span className="font-semibold">Próximo projeto</span>
            <div className="flex gap-2">
              <Link href={`${currentProject?.prevProject}`}>
                <IoMdArrowRoundBack className="text-2xl" />
              </Link>
              <Link href={`${currentProject?.nextProject}`}>
                <IoMdArrowRoundForward className="text-2xl" />
              </Link>
            </div>
          </div>
          <h3 className="lg:text-xl font-bold text-slate-700">
            {currentProject?.nextProjectName}
          </h3>
          <p className="text-sm lg:text-base">
            {currentProject?.nextProjectSlogan}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-6xl font-bold text-white">
            {currentProject?.name}
          </h1>
          <span className="text-xl text-white font-medium">
            {currentProject?.slogan}
          </span>
        </div>
        <div className="flex flex-col lg:flex-row lg:gap-40 gap-10 mt-20">
          <p className="max-w-xl font-medium text-white">
            {currentProject?.about}
          </p>
          <div className="flex flex-col gap-10 items-start">
            <div className="flex flex-col text-white">
              <span className="border-b pb-4 font-bold mb-2">Tecnologias</span>
              {currentProject?.technologies.map((t) => (
                <p className="font-medium" key={t}>
                  {t}
                </p>
              ))}
            </div>
            <div className="flex flex-col lg:flex-row lg:gap-10">
              {currentProject?.repository && (
                <a
                  href={currentProject.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 mb-4 w-fit"
                >
                  <p className="font-semibold text-brand">
                    Acessar repositório
                  </p>
                  <FiExternalLink className="text-brand text-2xl" />
                </a>
              )}
              {currentProject?.webSiteUrl && (
                <a
                  href={currentProject.webSiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 mb-4 w-fit"
                >
                  <p className="font-semibold text-brand">Abrir projeto</p>
                  <FiExternalLink className="text-brand text-2xl" />
                </a>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-14">
          {currentProject?.images.map((image) => (
            <Image
              key={image}
              src={image}
              alt={`Imagem do projeto ${currentProject.name}`}
              width={1260}
              height={391}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Project;
