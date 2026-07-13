export type FeedItem = {
  id: string
  category: string
  title: string
  date: string
  accent: "cyan" | "pink" | "lime" | "yellow" | "black"
}

export type ZineIssue = {
  id: string
  number: string
  title: string
  subtitle: string
}

export type HomeData = {
  hero: {
    label: string
    title: string
    excerpt: string
  }
  zinePromo: {
    title: string
    description: string
    tags: string[]
  }
  news: FeedItem[]
  tutorials: FeedItem[]
  opinions: FeedItem[]
  zines: ZineIssue[]
}

export const getHomeData = async (): Promise<HomeData> => {
  return {
    hero: {
      label: "Destaque",
      title: "IA, codigo aberto e o futuro da internet",
      excerpt:
        "Como a tecnologia livre e a inteligencia artificial estao redesenhando o futuro - e quem realmente se beneficia disso.",
    },
    zinePromo: {
      title: "Entre na zine",
      description: "Tecnologia, contracultura e caos visual",
      tags: ["404", "DIY", "OPEN", "NOISE"],
    },
    news: [
      {
        id: "news-1",
        category: "Software livre",
        title: "Open Source cresce no Brasil",
        date: "21 mai 2024",
        accent: "cyan",
      },
      {
        id: "news-2",
        category: "Inteligencia artificial",
        title: "Nova ferramenta de IA muda fluxo dos devs",
        date: "20 mai 2024",
        accent: "lime",
      },
      {
        id: "news-3",
        category: "Privacidade",
        title: "Big techs e privacidade: o que esta em jogo?",
        date: "18 mai 2024",
        accent: "pink",
      },
    ],
    tutorials: [
      {
        id: "tutorial-1",
        category: "Linux",
        title: "Guia: primeiros passos no Linux para iniciantes",
        date: "15 mai 2024",
        accent: "black",
      },
      {
        id: "tutorial-2",
        category: "Desenvolvimento",
        title: "Como criar uma API REST com Node.js",
        date: "14 mai 2024",
        accent: "cyan",
      },
      {
        id: "tutorial-3",
        category: "Seguranca",
        title: "Proteja seus dados: criptografia na pratica",
        date: "13 mai 2024",
        accent: "pink",
      },
    ],
    opinions: [
      {
        id: "opinion-1",
        category: "Opiniao",
        title: "A internet ficou pequena demais?",
        date: "19 mai 2024",
        accent: "black",
      },
      {
        id: "opinion-2",
        category: "Opiniao",
        title: "O problema nao e a IA, e quem controla a IA",
        date: "17 mai 2024",
        accent: "black",
      },
      {
        id: "opinion-3",
        category: "Opiniao",
        title: "Como sair do consumo passivo de tecnologia",
        date: "16 mai 2024",
        accent: "black",
      },
    ],
    zines: [
      {
        id: "zine-1",
        number: "01",
        title: "CTRL+R",
        subtitle: "Reinicie o sistema",
      },
      {
        id: "zine-2",
        number: "02",
        title: "O algoritmo",
        subtitle: "Nao e neutro",
      },
      {
        id: "zine-3",
        number: "03",
        title: "DIY digital",
        subtitle: "Faca voce mesmo",
      },
      {
        id: "zine-4",
        number: "04",
        title: "404",
        subtitle: "Realidade not found",
      },
    ],
  }
}
