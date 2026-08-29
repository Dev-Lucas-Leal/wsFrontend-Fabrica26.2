export function LoadingState() {
  return (
    <div className="flex justify-center py-16" role="status" aria-label="Carregando">

      <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-700 border-t-orange-500" />
      
    </div>
  );
}