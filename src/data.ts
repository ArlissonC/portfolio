import LogoLuma from "@/assets/svgs/logo-luma.svg";
import LogoProblemCompany from "@/assets/svgs/problem-company-logo.svg";
import { ImLinkedin } from "react-icons/im";
import { AiFillGithub } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

export const optionsMenu = [
  { label: "Início", href: "/#home" },
  { label: "Experiência", href: "/#myExperience" },
  { label: "Trabalho", href: "/#work" },
  { label: "Projetos", href: "/#projects" },
  { label: "Contato", href: "/#contacts" },
];

export const projects = [
  {
    id: 1,
    name: "Dogs",
    slogan: "Uma rede social para cachorros",
    bgSrc: "https://i.imgur.com/orBLRZa.jpg",
    about:
      "Uma rede social para cachorros, que permite aos usuários postar fotos de seus pets, incluindo informações como nome, peso e idade. Os usuários também podem comentar nas fotos de outros cachorros e acessar seus perfis para ver outras postagens. Além disso, a plataforma permite que os usuários vejam as estatísticas de visualizações de suas postagens, permitindo que acompanhem o desempenho de suas publicações na rede social.",
    images: [
      "https://i.imgur.com/fycCpIo.png",
      "https://i.imgur.com/AQGZF1j.png",
      "https://i.imgur.com/GiVnmDo.png",
      "https://i.imgur.com/5fa66V0.png",
    ],
    webSiteUrl: "https://dogs-arlissonc.vercel.app/",
    repository: "https://github.com/ArlissonC/dogs",
    technologies: ["React", "TypeScript", "Redux", "Victory"],
    prevProject: 1,
    nextProject: 2,
    nextProjectName: "ClubPizza",
    nextProjectSlogan: "Sistema para pizzarias",
  },
  {
    id: 2,
    name: "ClubPizza",
    slogan: "Sistema para pizzarias",
    bgSrc: "https://i.imgur.com/YMYYann.jpg",
    about:
      "Solução abrangente para gerenciar uma pizzaria, integrando um ambiente web e um aplicativo móvel. No sistema web, a cozinha tem acesso a uma interface em tempo real que exibe os pedidos atuais, permitindo uma gestão eficiente do fluxo de trabalho. Além disso, oferece a capacidade de cadastrar novos produtos e categorias. O aplicativo móvel é projetado para os garçons, permitindo que eles cadastrem novas ordens com os itens desejados. Essas ordens são enviadas instantaneamente para a cozinha, otimizando a comunicação entre a equipe de atendimento e a equipe de preparação.",
    images: ["https://i.imgur.com/YMYYann.jpg"],
    technologies: [
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "WebSocket",
      "React Native",
    ],
    prevProject: 2,
    nextProject: 1,
    nextProjectName: "Dogs",
    nextProjectSlogan: "Uma rede social para cachorros",
  },
];

export const profissionalExperiences = [
  {
    title: "Desenvolvedor Full-Stack - LUMA Ensino Individualizado",
    webSiteDns: "lumaensino.com.br",
    location: "Remoto (Vitória - ES)",
    period: "Fev de 2022 - Nov 2023",
    webSiteUrl: "https://lumaensino.com.br/",
    description:
      "Migração da plataforma para Next.js e .NET 7, trabalhando no desenvolvimento de recursos, na refatoração do sistema e na integração com as respectivas tecnologias. Além disso, simultaneamente, estava envolvido na sustentação da plataforma atual, que utiliza .NET 3.1 e AngularJS.",
    technologies: [
      "Next.js",
      "TailwindCSS",
      "Entity Framework",
      "Dapper",
      ".NET Core",
      "Microsoft SQL Server",
      "RabbitMQ",
    ],
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
