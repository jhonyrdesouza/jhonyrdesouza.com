import env from "@/env"

interface Author {
  name: string
  url: string
  avatar: string
  email: string
  linkedIn: string
  github: {
    username: string
    url: string
  }
  twitter?: string
}

interface Site {
  url: string
  name: string
  title: string
  description: string
  author: Author
  keywords?: string[]
}

export const BASE_URL = env.NEXT_PUBLIC_APP_URL

export const SITE: Site = {
  url: BASE_URL,
  name: "jhonyrdesouza portfolio",
  title: "Jhony R. de Souza",
  description:
    "Passionate Software engineer who focused on solving problems with digital products",
  author: {
    name: "Jhony R. de Souza",
    url: "https://jhonyrdesouza.com",
    email: "jhonyrdesouza@gmail.com",
    linkedIn: "https://www.linkedin.com/in/jhonyrdesouza",
    github: {
      username: "jhonyrdesouza",
      url: "https://www.github.com/jhonyrdesouza",
    },
    avatar: "/media/jhonyrdesouza/jhonyrdesouza.jpg",
    twitter: "@jhonyrdesouza",
  },
  keywords: [
    "jhonyrdesouza",
    "Jhony R. de Souza",
    "developer",
    "portfolio",
    "developer portfolio website",
    "portfolio website",
    "full-stack",
    "back-end",
    "front-end",
    "software engineer",
  ],
}
