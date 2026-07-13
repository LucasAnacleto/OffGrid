const newsItems = [
  "Linux 6.9 traz melhorias de performance e novos drivers",
  "IA generativa: hype ou revolucao?",
  "Adeus cookies de terceiros: o que muda?",
]

export const NewsTicker = () => {
  const tickerItems = [...newsItems, ...newsItems]

  return (
    <section className="flex h-9 items-center overflow-hidden border-b border-black bg-black px-6 text-sm font-medium text-white">
      <span className="mr-5 shrink-0 font-bold uppercase tracking-wide text-pink-500">
        Ultimas:
      </span>
      <div className="min-w-0 flex-1 overflow-hidden">
        <div className="flex w-max animate-[ticker_34s_linear_infinite] items-center gap-5 whitespace-nowrap hover:[animation-play-state:paused]">
          {tickerItems.map((item, index) => (
            <span key={`${item}-${index}`} className="flex items-center gap-5">
              <span className="text-white/60">|</span>
              <span>{`> ${item}`}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
