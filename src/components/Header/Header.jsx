export function Header() {
  return (
    <header className="sticky top-0 z-20 flex items-center gap-3 border-b border-slate-800 bg-slate-950/80 px-6 py-3 backdrop-blur">
      <img src = "/emblema-overwatch.png" alt="Overwatch Emblem" className="h-8 w-8" />
      <span className="text-lg font-bold tracking-wide text-white">
        Overwatch Heroes
      </span>
    </header>
  );
}