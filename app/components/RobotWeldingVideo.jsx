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
    <section className="relative z-10 border-b border-brand-border/60 bg-brand-dark py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-10">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-brand-accent">
            Do ensino à solda
          </p>
          <h2 className="text-balance text-2xl font-bold tracking-tight text-white sm:text-4xl">
            Programação intuitiva. Solda de alta precisão.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Veja o operador marcar os pontos do percurso e o robô executar a soldagem com precisão e repetibilidade.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-brand-border bg-brand-card shadow-2xl shadow-black/30">
          <video
            ref={videoRef}
            aria-label="Demonstração da programação dos pontos e da soldagem realizada pelo robô colaborativo"
            autoPlay
            muted
            loop
            playsInline
            controls
            preload="none"
            className="aspect-video w-full object-contain"
          />
        </div>
        <p className="mt-3 text-center text-xs text-brand-muted">
          Demonstração em loop, sem áudio. Use os controles do vídeo para pausar ou reproduzir.
        </p>
      </div>
    </section>
  );
}
