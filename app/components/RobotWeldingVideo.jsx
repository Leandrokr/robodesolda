"use client";

import { useEffect, useRef } from "react";

export function RobotWeldingVideo() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        video.src = "/robot-welding-demo.mp4";
        video.load();

        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          video.play().catch(() => {});
        }

        observer.disconnect();
      },
      { rootMargin: "320px 0px" },
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative z-10 border-b border-brand-border/60 bg-brand-dark py-12 sm:py-16 md:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-8 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] md:gap-16 md:px-8">
        <div className="order-1 flex justify-center">
          <div className="w-full overflow-hidden bg-brand-card sm:max-w-[28rem] sm:rounded-2xl sm:border sm:border-brand-border sm:shadow-2xl sm:shadow-black/30 md:max-w-none">
            <video
              ref={videoRef}
              aria-label="Demonstração vertical da programação dos pontos e da soldagem realizada pelo robô colaborativo"
              muted
              loop
              playsInline
              controls
              preload="none"
              className="mx-auto block aspect-[9/16] w-full object-contain md:aspect-auto md:h-[min(82svh,48rem)] md:w-auto md:max-w-full"
            />
          </div>
        </div>

        <div className="order-2 px-5 sm:px-8 md:px-0">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-brand-accent">
            Automação em ação · vídeo vertical de 41 s
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Da marcação dos pontos à solda, sem complexidade.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Veja como o operador ensina o trajeto ao robô e acompanha a execução precisa do cordão de solda.
          </p>

          <ol className="mt-8 flex max-w-xl flex-col gap-6">
            <li className="flex gap-4">
              <span className="font-mono text-sm font-semibold text-brand-accent">01</span>
              <div>
                <h3 className="font-semibold text-white">Marque os pontos</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-300">
                  O operador guia a tocha manualmente e registra cada posição do percurso.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="font-mono text-sm font-semibold text-brand-accent">02</span>
              <div>
                <h3 className="font-semibold text-white">Deixe o robô soldar</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-300">
                  O cobot repete o trajeto com consistência, enquanto a equipe acompanha o processo.
                </p>
              </div>
            </li>
          </ol>

          <p className="mt-8 text-xs text-brand-muted">
            Reprodução automática em loop, sem áudio. Os controles permitem pausar o vídeo.
          </p>
        </div>
      </div>
    </section>
  );
}
