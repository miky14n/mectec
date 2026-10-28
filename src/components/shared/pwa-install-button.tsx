"use client";

import { Download } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

type InstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
};

export function PwaInstallButton() {
  const [installPrompt, setInstallPrompt] = useState<InstallPromptEvent | null>(null);
  const [iosDevice, setIosDevice] = useState(false);
  const [showIosHelp, setShowIosHelp] = useState(false);

  useEffect(() => {
    const isStandalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      ("standalone" in navigator && Boolean(navigator.standalone));
    const isIos =
      /iPad|iPhone|iPod/.test(navigator.userAgent) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

    setIosDevice(isIos && !isStandalone);

    const handleInstallPrompt = (event: Event) => {
      event.preventDefault();
      setInstallPrompt(event as InstallPromptEvent);
    };

    const handleInstalled = () => setInstallPrompt(null);

    window.addEventListener("beforeinstallprompt", handleInstallPrompt);
    window.addEventListener("appinstalled", handleInstalled);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleInstallPrompt);
      window.removeEventListener("appinstalled", handleInstalled);
    };
  }, []);

  if (!installPrompt && !iosDevice) return null;

  async function installApp(promptEvent: InstallPromptEvent) {
    await promptEvent.prompt();
    await promptEvent.userChoice;
    setInstallPrompt(null);
  }

  return (
    <div className="relative">
      <Button
        type="button"
        variant="outline"
        className="size-11 shrink-0 border-white/20 bg-white/5 px-0 text-white hover:bg-white/10 hover:text-white sm:h-10 sm:w-auto sm:px-3"
        onClick={installPrompt ? () => installApp(installPrompt) : () => setShowIosHelp((value) => !value)}
        aria-expanded={iosDevice ? showIosHelp : undefined}
        aria-label={installPrompt ? "Instalar aplicación" : "Cómo instalar la aplicación"}
        title={installPrompt ? "Instalar aplicación" : "Cómo instalar la aplicación"}
      >
        <Download aria-hidden="true" />
        <span className="hidden sm:inline">{installPrompt ? "Instalar app" : "Cómo instalar"}</span>
      </Button>
      {iosDevice && showIosHelp && (
        <div className="absolute right-0 top-full z-40 mt-2 w-64 rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700 shadow-xl">
          <p className="font-bold text-slate-950">Instalar en iPhone o iPad</p>
          <p className="mt-2 leading-5">En Safari, toca Compartir y luego “Añadir a pantalla de inicio”.</p>
        </div>
      )}
    </div>
  );
}
