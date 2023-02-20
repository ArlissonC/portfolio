import React from "@/assets/svgs/react.svg";
import NextJS from "@/assets/svgs/nextjs.svg";
import TypeScript from "@/assets/svgs/typescript.svg";
import TailwindCSS from "@/assets/svgs/tailwindcss.svg";
import Redux from "@/assets/svgs/redux.svg";
import AngularJS from "@/assets/svgs/angularjs.svg";
import MaterialUI from "@/assets/svgs/materialui.svg";
import Bootstrap from "@/assets/svgs/bootstrap.svg";
import Sass from "@/assets/svgs/sass.svg";
import Figma from "@/assets/svgs/figma.svg";
import LogoLuma from "@/assets/svgs/logo-luma.svg";
import LogoProblemCompany from "@/assets/svgs/problem-company-logo.svg";
import { ImLinkedin } from "react-icons/im";
import { AiFillGithub } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

export const optionsMenu = [
  { label: "Início", href: "#home" },
  { label: "Habilidades", href: "#skills" },
  { label: "Experiência", href: "#professionalExperience" },
  { label: "Projetos", href: "#projects" },
  { label: "Contato", href: "#contacts" },
];

export const stacks = {
  main: [
    { label: "React", Icon: React },
    { label: "Next.js", Icon: NextJS },
    { label: "TypeScript", Icon: TypeScript },
    { label: "TailwindCSS", Icon: TailwindCSS },
    { label: "Redux", Icon: Redux },
  ],
  relevant: [
    { label: "AngularJS", Icon: AngularJS },
    { label: "Material UI", Icon: MaterialUI },
    { label: "Bootstrap", Icon: Bootstrap },
    { label: "SASS", Icon: Sass },
    { label: "Figma", Icon: Figma },
  ],
};

export const projects = [
  {
    name: "LUMA Ensino Individualizado",
    about:
      "Plataforma com plano mensal de aulas online individualizadas e ao vivo que potencializam os estudos. Os alunos têm acesso a professores altamente qualificados que adaptam o conteúdo e a metodologia de ensino às necessidades e objetivos individuais de cada aluno.",
    bgSrc: "https://i.imgur.com/JC9NpGZ.jpg",
    webSiteUrl: "https://lumaensino.com.br/",
    technologies: [
      "React",
      "TypeScript",
      "Redux",
      "TailwindCSS",
      "Figma",
      "AngularJS",
    ],
  },
  {
    name: "Dogs",
    about:
      "Uma rede social para cachorros, que permite aos usuários postar fotos de seus pets, incluindo informações como nome, peso e idade. Os usuários também podem comentar nas fotos de outros cachorros e acessar seus perfis para ver outras postagens. Além disso, a plataforma permite que os usuários vejam as estatísticas de visualizações de suas postagens, permitindo que acompanhem o desempenho de suas publicações na rede social.",
    bgSrc: "https://i.imgur.com/orBLRZa.jpg",
    webSiteUrl: "https://dogs-arlissonc.vercel.app/",
    technologies: ["React", "TypeScript", "Redux", "Victory"],
  },
];

export const profissionalExperiences = [
  {
    title: "Desenvolvedor Front-end - LUMA Ensino Individualizado",
    webSiteDns: "lumaensino.com.br",
    location: "Remoto (Vitória - ES)",
    period: "Fev de 2022 - Atual",
    webSiteUrl: "https://lumaensino.com.br/",
    description:
      "Responsável por estruturar e desenvolver o redesign da plataforma, garantindo que a interface do usuário do site seja amigável, intuitiva e fácil de usar. Para isso, trabalho em conjunto com a equipe de design para criar um layout moderno e atraente que seja funcional e coerente com a marca da empresa e mantendo um padrão de desenvolvimento escalável.",
    technologies: ["React", "TypeScript", "Redux", "TailwindCSS"],
    Logo: LogoLuma,
    current: true,
  },
  {
    title: "Desenvolvedor Front-end - Problem Company",
    webSiteDns: "problemcompany.org",
    location: "Remoto (Nova York, Estados Unidos)",
    period: "Jan de 2023 - Fev de 2023",
    webSiteUrl: "https://problemcompany.org/",
    description:
      "Desenvolvimento de novas features, correção de bugs e erros de lógica, construir arquitetura Front-end de acordo com novas funcionalidades e necessidades, manter um padrão de desenvolvimento escalável e auxiliar a atuação de novos desenvolvedores na equipe.",
    technologies: ["React", "TypeScript", "Redux", "Material UI", "gRPC"],
    Logo: LogoProblemCompany,
    current: false,
  },
];

export const contacts = [
  {
    url: "https://www.linkedin.com/in/arlissoncosta/",
    label: "LinkedIn",
    dns: "in/arlissoncosta",
    Icon: ImLinkedin,
  },
  {
    url: "https://github.com/ArlissonC",
    label: "GitHub",
    dns: "arlissonc",
    Icon: AiFillGithub,
  },
  {
    url: "mailto:arlisson.fs13@gmail.com?",
    label: "E-mail",
    dns: "arlisson.fs13@gmail.com",
    Icon: MdEmail,
  },
];
