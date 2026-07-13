import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <main className="mx-auto flex w-full max-w-[1540px] flex-col gap-5 p-5">
      <section className="grid gap-5 xl:grid-cols-[1.45fr_1fr]">
        <Skeleton className="min-h-[340px] rounded-none border-2 border-black bg-black/10" />
        <Skeleton className="min-h-[340px] rounded-none border-2 border-black bg-black/10" />
      </section>

      <section className="grid gap-5 xl:grid-cols-3">
        {Array.from({ length: 3 }).map((_, panelIndex) => (
          <div key={panelIndex} className="border-2 border-black bg-white p-5 shadow-[5px_5px_0_0_#000]">
            <Skeleton className="h-10 w-48 rounded-none bg-black/15" />
            <div className="mt-5 space-y-4">
              {Array.from({ length: 3 }).map((_, itemIndex) => (
                <div key={itemIndex} className="grid grid-cols-[104px_1fr] gap-4">
                  <Skeleton className="h-20 rounded-none bg-black/15" />
                  <div className="space-y-2">
                    <Skeleton className="h-3 w-24 rounded-none bg-black/15" />
                    <Skeleton className="h-5 w-full rounded-none bg-black/15" />
                    <Skeleton className="h-3 w-20 rounded-none bg-black/15" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="grid gap-5 xl:grid-cols-[1fr_1.95fr]">
        <Skeleton className="h-40 rounded-none border-2 border-black bg-black/10" />
        <Skeleton className="h-40 rounded-none border-2 border-black bg-black/10" />
      </section>
    </main>
  )
}
