import type { JSX } from "react"

import {
  Android,
  Bootstrap,
  FramerMotion,
  Git,
  JavaScript,
  Jest,
  JQuery,
  Kotlin,
  Laravel,
  MDX,
  MySQL,
  NextJS,
  NuxtJS,
  PostgreSQL,
  Prisma,
  RabbitMQ,
  ReactJS,
  Redis,
  Ruby,
  RubyOnRails,
  ShadcnUI,
  Spring,
  Supabase,
  TailwindCSS,
  TypeScript,
  Vercel,
  VueJS,
} from "../components/icons"

const ICON_SIZE = "size-5"
const ICON_SIZE_SMALL = "size-4"

export const STACKS: { [key: string]: JSX.Element } = {
  TypeScript: <TypeScript className={`${ICON_SIZE} fill-[#3178C6]`} />,
  JavaScript: <JavaScript className={`${ICON_SIZE} fill-[#F7DF1E]`} />,
  Kotlin: <Kotlin className={`${ICON_SIZE} fill-[#7F52FF]`} />,
  Ruby: <Ruby className={`${ICON_SIZE} fill-[#CC342D]`} />,
  "Next.js": <NextJS className={`${ICON_SIZE} fill-black dark:fill-white`} />,
  "React.js": <ReactJS className={`${ICON_SIZE} fill-[#61DAFB]`} />,
  "Nuxt.js": <NuxtJS className={`${ICON_SIZE} fill-[#00DC82]`} />,
  "Vue.js": <VueJS className={`${ICON_SIZE} fill-[#4FC08D]`} />,
  Jest: <Jest className={`${ICON_SIZE_SMALL} fill-[#C21325]`} />,
  Laravel: <Laravel className={`${ICON_SIZE} fill-[#FF2D20]`} />,
  Spring: <Spring className={`${ICON_SIZE} fill-[#6DB33F]`} />,
  "Ruby on Rails": (
    <RubyOnRails className={`${ICON_SIZE_SMALL} fill-[#D30001]`} />
  ),
  "Tailwind CSS": <TailwindCSS className={`${ICON_SIZE} fill-[#06B6D4]`} />,
  MDX: <MDX className={`${ICON_SIZE} fill-black dark:fill-white`} />,
  MySQL: <MySQL className={`${ICON_SIZE} fill-[#4479A1]`} />,
  PostgreSQL: <PostgreSQL className={`${ICON_SIZE} fill-[#4169E1]`} />,
  Redis: <Redis className={`${ICON_SIZE} fill-[#FF4438]`} />,
  Prisma: <Prisma className={`${ICON_SIZE} fill-[#2D3748] dark:fill-white`} />,
  RabbitMQ: <RabbitMQ className={`${ICON_SIZE} fill-[#FF6600]`} />,
  Git: <Git className={`${ICON_SIZE} fill-[#F05032]`} />,
  JQuery: <JQuery className={`${ICON_SIZE} fill-[#3FCF8E]`} />,
  Bootstrap: <Bootstrap className={`${ICON_SIZE} fill-[#7952B3]`} />,
  Supabase: <Supabase className={`${ICON_SIZE} fill-[#3FCF83]`} />,
  Android: <Android className={`${ICON_SIZE} fill-[#34A853]`} />,
}

export const CORE_STACKS: {
  name: string
  icon: JSX.Element
  link: string
}[] = [
  { name: "Next.js", icon: <NextJS />, link: "https://nextjs.org" },
  { name: "React.js", icon: <ReactJS />, link: "https://react.dev" },
  {
    name: "Tailwind CSS",
    icon: <TailwindCSS />,
    link: "https://tailwindcss.com",
  },
  { name: "MDX", icon: <MDX />, link: "https://mdxjs.com" },
  {
    name: "Framer Motion",
    icon: <FramerMotion />,
    link: "https://www.framer.com/motion",
  },
  {
    name: "TypeScript",
    icon: <TypeScript />,
    link: "https://www.typescriptlang.org",
  },
  {
    name: "Vercel",
    icon: <Vercel />,
    link: "https://vercel.com",
  },
  {
    name: "shadcn/ui",
    icon: <ShadcnUI />,
    link: "https://ui.shadcn.com",
  },
  {
    name: "Prisma",
    icon: <Prisma />,
    link: "https://www.prisma.io",
  },
]
