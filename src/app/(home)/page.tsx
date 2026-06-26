import { ArrowRight, Code2, LockKeyhole, Mail, Terminal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

import { FeedItem, getHomeData, ZineIssue } from "./_data/home-data"

const accentClasses: Record<FeedItem["accent"], string> = {
  cyan: "bg-cyan-400",
  pink: "bg-pink-500",
  lime: "bg-lime-400",
  yellow: "bg-[#f7e702]",
  black: "bg-black text-white",
}

const featureIcons = [Terminal, Code2, LockKeyhole]

export default async function Home() {
  const data = await getHomeData()

  return (
    <main className="mx-auto flex w-full max-w-[1540px] flex-col gap-5 p-5">
      <section className="grid gap-5 xl:grid-cols-[1.45fr_1fr]">
        <article className="relative min-h-[340px] overflow-hidden border-2 border-black bg-[#f7e702] p-7 shadow-[6px_6px_0_0_#000]">
          <span className="inline-flex bg-black px-3 py-1 text-sm font-bold uppercase text-white">
            {data.hero.label}
          </span>
          <h1 className="mt-7 max-w-4xl text-5xl font-black uppercase leading-[0.95] tracking-wide text-black md:text-7xl">
            {data.hero.title}
          </h1>
          <p className="mt-5 max-w-xl text-base font-bold leading-6 text-black">
            {data.hero.excerpt}
          </p>
          <Button variant="elevated" className="mt-6 border-black bg-white px-8 uppercase">
            Ler materia
          </Button>
          <div className="absolute bottom-8 right-10 hidden text-8xl font-black text-pink-500 md:block">
            @
          </div>
        </article>

        <article className="relative min-h-[340px] overflow-hidden border-2 border-black bg-pink-500 p-7 shadow-[6px_6px_0_0_#000]">
          <h2 className="inline-flex bg-black px-4 py-2 text-3xl font-black uppercase tracking-wide text-white">
            {data.zinePromo.title}
          </h2>
          <p className="mt-6 max-w-sm text-2xl font-black uppercase leading-tight text-black">
            {data.zinePromo.description}
          </p>
          <Button className="mt-7 size-16 border-black bg-black text-white hover:bg-black">
            <ArrowRight className="size-8" />
          </Button>
          <div className="mt-7 grid grid-cols-2 gap-4 md:grid-cols-4">
            {data.zinePromo.tags.map((tag) => (
              <span
                key={tag}
                className="border-2 border-black bg-white px-4 py-3 text-center text-3xl font-black shadow-[5px_5px_0_0_#000]"
              >
                {tag}
              </span>
            ))}
          </div>
        </article>
      </section>

      <section className="grid gap-5 xl:grid-cols-3">
        <FeedPanel title="Ultimas noticias" color="bg-cyan-400" items={data.news} />
        <FeedPanel title="Tutoriais em alta" color="bg-lime-400" items={data.tutorials} />
        <FeedPanel title="Opiniao" color="bg-[#f7e702]" items={data.opinions} />
      </section>

      <section className="grid gap-5 xl:grid-cols-[1fr_1.95fr]">
        <div className="border-2 border-black bg-cyan-400 p-5 shadow-[5px_5px_0_0_#000]">
          <div className="flex items-center gap-4">
            <span className="flex size-14 items-center justify-center bg-black text-white">
              <Mail className="size-7" />
            </span>
            <div>
              <h2 className="text-xl font-black uppercase">Receba conteudo sem filtro</h2>
              <p className="mt-1 text-xs font-bold">
                Assine a newsletter e receba artigos, guias e materiais exclusivos.
              </p>
            </div>
          </div>
          <div className="mt-5 flex gap-2">
            <Input
              placeholder="seu@email.com"
              className="h-12 rounded-none border-2 border-black bg-white shadow-none focus-visible:ring-0"
            />
            <Button className="h-12 rounded-none border-2 border-black bg-black px-8 uppercase text-white hover:bg-black">
              Assinar
            </Button>
          </div>
        </div>

        <ZineStrip issues={data.zines} />
      </section>
    </main>
  )
}

function FeedPanel({
  title,
  color,
  items,
}: {
  title: string
  color: string
  items: FeedItem[]
}) {
  return (
    <section className="border-2 border-black bg-white shadow-[5px_5px_0_0_#000]">
      <div className="flex items-center justify-between border-b border-black">
        <h2 className={cn("px-5 py-2 text-xl font-black uppercase", color)}>{title}</h2>
        <Button variant="link" className="px-5 uppercase text-black">
          Ver todos <ArrowRight className="size-4" />
        </Button>
      </div>
      <div className="divide-y divide-black/25 p-5">
        {items.map((item, index) => {
          const Icon = featureIcons[index % featureIcons.length]

          return (
            <article key={item.id} className="grid grid-cols-[104px_1fr_auto] items-center gap-4 py-3 first:pt-0 last:pb-0">
              <div className={cn("flex h-20 items-center justify-center border border-black", accentClasses[item.accent])}>
                <Icon className="size-10" />
              </div>
              <div>
                <p className="text-xs font-black uppercase text-pink-600">{item.category}</p>
                <h3 className="mt-1 text-base font-black leading-tight">{item.title}</h3>
                <p className="mt-1 text-xs uppercase text-black/60">{item.date}</p>
              </div>
              <ArrowRight className="size-5" />
            </article>
          )
        })}
      </div>
    </section>
  )
}

function ZineStrip({ issues }: { issues: ZineIssue[] }) {
  return (
    <section className="border-2 border-black bg-white shadow-[5px_5px_0_0_#000]">
      <div className="flex items-center justify-between border-b border-black bg-pink-500 px-5 py-2">
        <h2 className="text-xl font-black uppercase">Zine: edicoes recentes</h2>
        <Button variant="link" className="uppercase text-black">
          Ver todas <ArrowRight className="size-4" />
        </Button>
      </div>
      <div className="grid gap-4 p-5 md:grid-cols-2 xl:grid-cols-4">
        {issues.map((issue) => (
          <article key={issue.id} className="min-h-24 border-2 border-black bg-black p-3 text-white">
            <span className="inline-flex bg-[#f7e702] px-2 py-1 text-sm font-black text-black">
              {issue.number}
            </span>
            <h3 className="mt-2 text-lg font-black uppercase">{issue.title}</h3>
            <p className="mt-1 text-sm font-bold uppercase text-white/85">{issue.subtitle}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
