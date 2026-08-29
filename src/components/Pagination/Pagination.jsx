/**
 * @param {{ currentPage: number, totalPages: number, onPageChange: (page: number) => void }} props
 */

export function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <nav className="mt-8 flex items-center justify-center gap-2" aria-label="Paginação">

      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="rounded-md px-3 py-2 text-sm text-white disabled:opacity-30"
      >
        Anterior
      </button>

      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          type="button"
          onClick={() => onPageChange(pageNumber)}
          className={`h-9 w-9 rounded-md text-sm font-semibold transition ${
            pageNumber === currentPage
              ? "bg-orange-500 text-white"
              : "bg-slate-800 text-slate-300 hover:bg-slate-700"
          }`}
        >
          {pageNumber}
        </button>
      ))}

      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="rounded-md px-3 py-2 text-sm text-white disabled:opacity-30"
      >
        Próxima
      </button>
      
    </nav>
  );
}