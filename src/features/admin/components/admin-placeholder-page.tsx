interface AdminPlaceholderPageProps {
  title: string;
  description: string;
}

export const AdminPlaceholderPage = ({
  title,
  description,
}: AdminPlaceholderPageProps) => {
  return (
    <div className="flex min-h-[420px] flex-col justify-between gap-8">
      <div>
        <span className="inline-flex bg-black px-3 py-1 text-sm font-black uppercase leading-none text-white">
          Em breve
        </span>
        <h1 className="mt-4 text-4xl font-black uppercase leading-none text-black">
          {title}
        </h1>
        <p className="mt-3 max-w-2xl text-sm font-bold uppercase leading-relaxed text-black/70">
          {description}
        </p>
      </div>

      <div className="border-2 border-dashed border-black bg-white p-6 text-center shadow-[4px_4px_0_#000]">
        <p className="text-sm font-black uppercase text-black">
          Esta tela ja esta roteada. O conteudo entra na proxima etapa.
        </p>
      </div>
    </div>
  );
};
