"use client";

import { useState } from "react";
import {
  Bold,
  CalendarDays,
  Code2,
  Heading1,
  ImageIcon,
  Italic,
  LinkIcon,
  List,
  ListOrdered,
  Maximize,
  Quote,
  Strikethrough,
} from "lucide-react";

import { Calendar } from "@/components/ui/calendar";
import { AdminModal } from "@/features/admin/components/admin-modal";

const toolbarItems = [
  { label: "Titulo", icon: Heading1 },
  { label: "Negrito", icon: Bold },
  { label: "Italico", icon: Italic },
  { label: "Tachado", icon: Strikethrough },
  { label: "Lista", icon: List },
  { label: "Lista ordenada", icon: ListOrdered },
  { label: "Citacao", icon: Quote },
  { label: "Link", icon: LinkIcon },
  { label: "Imagem", icon: ImageIcon },
  { label: "Codigo", icon: Code2 },
  { label: "Tela cheia", icon: Maximize },
];

const tags = ["linux", "kernel", "tecnologia"];

const inputClassName =
  "h-11 w-full border-2 border-black bg-white px-4 text-sm font-bold text-black outline-none placeholder:text-black/45";

const labelClassName =
  "mb-2 block text-sm font-black uppercase tracking-[0.04em] text-black";

const formatPublicationDate = (date: Date | undefined, time: string) => {
  if (!date) {
    return "Selecione uma data";
  }

  return `${new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(date)} ${time}`;
};

export const NewsFormModal = () => {
  const [publicationDate, setPublicationDate] = useState<Date | undefined>(
    new Date(2024, 4, 21)
  );
  const [publicationTime, setPublicationTime] = useState("10:30");
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  return (
    <AdminModal
      title="Nova noticia"
      backHref="/admin"
      footer={
        <>
          <button
            type="button"
            className="h-11 border-2 border-black bg-white px-5 text-sm font-black uppercase text-black shadow-[3px_3px_0_#000] transition-transform hover:-translate-y-0.5"
          >
            Cancelar
          </button>
          <button
            type="button"
            className="h-11 border-2 border-black bg-white px-5 text-sm font-black uppercase text-black shadow-[3px_3px_0_#000] transition-transform hover:-translate-y-0.5"
          >
            Salvar rascunho
          </button>
          <button
            type="button"
            className="h-11 border-2 border-black bg-pink-500 px-5 text-sm font-black uppercase text-black shadow-[3px_3px_0_#000] transition-transform hover:-translate-y-0.5"
          >
            Publicar noticia
          </button>
        </>
      }
    >
      <form className="grid gap-4">
        <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_minmax(320px,0.9fr)]">
          <div className="grid gap-4">
            <label>
              <span className={labelClassName}>Titulo da noticia *</span>
              <input
                className={inputClassName}
                placeholder="Digite o titulo..."
                type="text"
              />
            </label>

            <label>
              <span className={labelClassName}>Resumo / chamada *</span>
              <textarea
                className="min-h-32 w-full resize-y border-2 border-black bg-white px-4 py-3 text-sm font-bold text-black outline-none placeholder:text-black/45"
                placeholder="Texto curto que aparece nos cards e listagens..."
              />
            </label>

            <div>
              <span className={labelClassName}>Imagem de capa</span>
              <div className="flex min-h-32 flex-col items-center justify-center gap-3 border-2 border-dashed border-black bg-white p-5 text-center">
                <ImageIcon className="size-9" strokeWidth={3} />
                <div className="text-sm font-black uppercase leading-tight">
                  <p>Arraste uma imagem aqui</p>
                  <p>ou</p>
                </div>
                <button
                  type="button"
                  className="h-10 border-2 border-black bg-white px-5 text-xs font-black uppercase text-black shadow-[3px_3px_0_#000] transition-transform hover:-translate-y-0.5"
                >
                  Escolher arquivo
                </button>
              </div>
            </div>
          </div>

          <div className="grid content-start gap-4">
            <label>
              <span className={labelClassName}>Slug (URL) *</span>
              <input
                className={inputClassName}
                placeholder="exemplo-de-slug-da-noticia"
                type="text"
              />
            </label>

            <label>
              <span className={labelClassName}>Categoria *</span>
              <select className={inputClassName} defaultValue="">
                <option value="" disabled>
                  Selecione uma categoria
                </option>
                <option value="linux">Linux</option>
                <option value="kernel">Kernel</option>
                <option value="software">Software</option>
                <option value="tutoriais">Tutoriais</option>
              </select>
            </label>

            <div>
              <label>
                <span className={labelClassName}>Tags</span>
                <input
                  className={inputClassName}
                  placeholder="Digite e pressione ENTER para adicionar"
                  type="text"
                />
              </label>
              <div className="mt-2 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center border-2 border-black bg-white px-2 py-0.5 text-xs font-black lowercase leading-none"
                  >
                    {tag} x
                  </span>
                ))}
              </div>
            </div>

            <label>
              <span className={labelClassName}>Status *</span>
              <select className={inputClassName} defaultValue="draft">
                <option value="draft">Rascunho</option>
                <option value="published">Publicado</option>
                <option value="scheduled">Agendado</option>
              </select>
            </label>

            <label>
              <span className={labelClassName}>Data de publicacao</span>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsDatePickerOpen((current) => !current)}
                  className={`${inputClassName} flex items-center justify-between gap-3 pr-3 text-left`}
                >
                  <span>
                    {formatPublicationDate(publicationDate, publicationTime)}
                  </span>
                  <CalendarDays className="size-5 shrink-0" strokeWidth={3} />
                </button>

                {isDatePickerOpen ? (
                  <div className="absolute right-0 top-[calc(100%+0.5rem)] z-50 w-fit border-2 border-black bg-white p-3 shadow-[4px_4px_0_#000]">
                    <Calendar
                      mode="single"
                      selected={publicationDate}
                      onSelect={(date) => {
                        setPublicationDate(date);
                        setIsDatePickerOpen(false);
                      }}
                      className="bg-white"
                      buttonVariant="ghost"
                    />
                    <div className="mt-3 border-t-2 border-black pt-3">
                      <span className="mb-2 block text-xs font-black uppercase tracking-[0.04em] text-black">
                        Hora
                      </span>
                      <input
                        aria-label="Hora de publicacao"
                        className={inputClassName}
                        type="time"
                        value={publicationTime}
                        onChange={(event) =>
                          setPublicationTime(event.target.value)
                        }
                      />
                    </div>
                  </div>
                ) : null}
              </div>
            </label>
          </div>
        </div>

        <div>
          <span className={labelClassName}>Conteudo *</span>
          <div className="border-2 border-black bg-white">
            <div className="flex min-h-11 flex-wrap items-center gap-1 border-b-2 border-black px-2">
              {toolbarItems.map((item) => {
                const Icon = item.icon;

                return (
                  <button
                    key={item.label}
                    type="button"
                    aria-label={item.label}
                    className="inline-flex size-9 items-center justify-center bg-white text-black hover:bg-[#f4f4f0]"
                  >
                    <Icon className="size-4.5" strokeWidth={3} />
                  </button>
                );
              })}
            </div>
            <textarea
              className="min-h-32 w-full resize-y px-4 py-3 text-sm font-bold text-black outline-none placeholder:text-black/45"
              placeholder="Escreva o conteudo da noticia aqui..."
            />
          </div>
        </div>

        <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_minmax(320px,0.95fr)]">
          <fieldset className="border-2 border-black bg-white p-4">
            <legend className="bg-black px-2 py-1 text-sm font-black uppercase leading-none text-white">
              SEO
            </legend>
            <div className="grid gap-3">
              <label className="grid gap-2 md:grid-cols-[9rem_minmax(0,1fr)] md:items-center">
                <span className="text-xs font-black uppercase">
                  SEO title
                </span>
                <input
                  className={inputClassName}
                  placeholder="Titulo para motores de busca"
                  type="text"
                />
              </label>
              <label className="grid gap-2 md:grid-cols-[9rem_minmax(0,1fr)] md:items-start">
                <span className="pt-3 text-xs font-black uppercase">
                  SEO description
                </span>
                <textarea
                  className="min-h-16 w-full resize-y border-2 border-black bg-white px-4 py-3 text-sm font-bold text-black outline-none placeholder:text-black/45"
                  placeholder="Descricao curta para motores de busca..."
                />
              </label>
            </div>
          </fieldset>

          <fieldset className="border-2 border-black bg-white p-4">
            <legend className="bg-black px-2 py-1 text-sm font-black uppercase leading-none text-white">
              Autor
            </legend>
            <label>
              <span className={labelClassName}>Autor *</span>
              <select className={inputClassName} defaultValue="lucas">
                <option value="lucas">Lucas Anacleto</option>
              </select>
            </label>
          </fieldset>
        </div>
      </form>
    </AdminModal>
  );
};
