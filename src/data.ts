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
