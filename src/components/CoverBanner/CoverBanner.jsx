export function CoverBanner() {
  return (
    <section
      className="relative flex h-[420px] w-full items-end justify-center bg-slate-900 bg-cover bg-center"
      style={{ backgroundImage: "url('/overwatch-cover.npg')" }}
    >

      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />

      <div className="relative z-10 pb-10 text-center">

        <h1 className="text-4xl font-extrabold uppercase tracking-wide text-white drop-shadow-lg md:text-6xl">
          Overwatch Heroes
        </h1>

        <p className="mt-2 text-sm text-slate-200 md:text-base">
          Conheça todos os heróis do universo Overwatch
        </p>

      </div>
      
    </section>
  );
}