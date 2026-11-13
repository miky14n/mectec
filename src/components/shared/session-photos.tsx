"use client";

import { Camera, ImagePlus, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState, type ChangeEvent } from "react";
import { imageMimeTypes, maxImageSizeBytes } from "@/schemas/attachment.schema";

export type SessionPhoto = { id: string; section: string; name: string; preview: string; caption: string };

export function useSessionPhotos() {
  const [photos, setPhotos] = useState<SessionPhoto[]>([]);
  const urls = useRef(new Set<string>());
  useEffect(() => () => { urls.current.forEach((url) => URL.revokeObjectURL(url)); }, []);

  function add(section: string, files: File[]) {
    const errors: string[] = [];
    const added = files.flatMap((file) => {
      if (!imageMimeTypes.includes(file.type as (typeof imageMimeTypes)[number]) || file.size > maxImageSizeBytes) {
        errors.push(`${file.name}: usa JPG, PNG o WebP de hasta 8 MB.`);
        return [];
      }
      const preview = URL.createObjectURL(file);
      urls.current.add(preview);
      return [{ id: typeof crypto !== "undefined" && "randomUUID" in crypto ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`, section, name: file.name, preview, caption: "" }];
    });
    setPhotos((current) => [...current, ...added]);
    return errors;
  }
  function remove(id: string) {
    setPhotos((current) => {
      const photo = current.find((item) => item.id === id);
      if (photo) { URL.revokeObjectURL(photo.preview); urls.current.delete(photo.preview); }
      return current.filter((item) => item.id !== id);
    });
  }
  function caption(id: string, value: string) { setPhotos((current) => current.map((item) => item.id === id ? { ...item, caption: value } : item)); }
  return { photos, add, remove, caption };
}

export function SessionPhotoField({ label, section, photos, add, remove, caption }: { label: string; section: string; photos: SessionPhoto[]; add: (section: string, files: File[]) => string[]; remove: (id: string) => void; caption: (id: string, value: string) => void }) {
  const [errors, setErrors] = useState<string[]>([]);
  const selected = photos.filter((photo) => photo.section === section);
  function onChange(event: ChangeEvent<HTMLInputElement>) { setErrors(add(section, Array.from(event.target.files ?? []))); event.target.value = ""; }
  return <div className="rounded-xl border border-slate-200 bg-white p-4"><p className="text-sm font-semibold text-slate-700">{label}</p><p className="mt-1 text-xs leading-5 text-slate-500">Las fotos permanecen solo durante esta sesión y no se guardan en el borrador.</p><div className="mt-3 flex flex-wrap gap-2"><label className="inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-xl border border-blue-200 px-3 text-sm font-semibold text-blue-700 hover:bg-blue-50"><Camera className="size-4" /> Tomar foto<input aria-label={`Tomar foto: ${label}`} type="file" accept="image/jpeg,image/png,image/webp" capture="environment" className="sr-only" onChange={onChange} /></label><label className="inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-xl border border-blue-200 px-3 text-sm font-semibold text-blue-700 hover:bg-blue-50"><ImagePlus className="size-4" /> Elegir fotos<input aria-label={`Elegir fotos: ${label}`} type="file" accept="image/jpeg,image/png,image/webp" multiple className="sr-only" onChange={onChange} /></label></div>{errors.map((error) => <p role="alert" key={error} className="mt-2 text-sm text-red-700">{error}</p>)}<div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{selected.map((photo) => <article key={photo.id} className="overflow-hidden rounded-xl border border-slate-200"><div className="relative aspect-[4/3] bg-slate-100"><Image src={photo.preview} alt={photo.caption || label} fill unoptimized className="object-cover" /><button type="button" aria-label={`Eliminar foto de ${label}`} onClick={() => remove(photo.id)} className="absolute right-2 top-2 grid size-9 place-items-center rounded-full bg-slate-950/75 text-white"><X className="size-4" /></button></div><div className="p-3"><p className="truncate text-xs text-slate-400">{photo.name}</p><input aria-label={`Descripción de foto: ${label}`} className="mt-2 h-10 w-full rounded-lg border border-slate-200 px-3 text-sm text-slate-950" value={photo.caption} onChange={(event) => caption(photo.id, event.target.value)} placeholder="Descripción opcional" /></div></article>)}</div></div>;
}
