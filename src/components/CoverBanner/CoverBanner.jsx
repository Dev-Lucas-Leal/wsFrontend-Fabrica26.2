export function CoverBanner() {
  return (
    <section
      className="relative flex h-[60vh] min-h-[360px] w-full items-end justify-center bg-slate-900 bg-cover bg-center"
      style={{ backgroundImage: "url('/overwatch-cover.png')" }}
    >

      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />

      <div className="relative z-10 flex flex-col items-center gap-3 pb-12 text-center">
        <img src="/emblema-overwatch.png" alt="Overwatch Emblem" className="h-14 w-14 drop-shadow-lg" />

        <h1 className="text-4xl font-extrabold uppercase tracking-wide text-white drop-shadow-lg md:text-6xl">
          Overwatch Heroes
        </h1>

        <p className="max-w-md text-sm text-slate-200 md:text-base">
          Conheça todos os heróis do universo Overwatch — tanques, atiradores e suportes reunidos em um só lugar.
        </p>

      </div>
    </section>
  );
}