import './pagination.css';
import LeftArrowBtn from '../../icons/LeftArrowBtn';
import RightArrowBtn from '../../icons/RightArrowBtn';

type PaginationsProps = {
  page: number;
  totalPages: number;
  setPage: (page: number) => void;
}

export default function Pagination({ page, totalPages, setPage }: PaginationsProps) {
  function goTo(next: number) {
    setPage(next);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  function getVisiblePages() {
    if (totalPages <= 3) {
      return Array.from({ length: totalPages }, (_, i) => i);
    }

    // First page
    if (page === 0) {
      return [0, 1, 2];
    }

    if (page === totalPages - 1) {
      return [
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
      ];
    }
    return [page - 1, page, page + 1];
  };

  const visiblePages = getVisiblePages();

  const activePosition = visiblePages.indexOf(page);

  return (
    <div className="flex justify-center gap-4 mt-8">
      <button className={`small text ghost icon relative ${page === 0 ? 'disabled' : ''}`}
        onClick={() => goTo(page - 1)}
        disabled={page === 0}>
        <LeftArrowBtn />
        <span className="hidden sm:inline">Prev</span>
      </button>

      <div className="relative flex gap-2">
        <span
          className="active-page-indicator"
          style={{
            transform: `translateX(${activePosition * 44}px)`,
          }}
        />

        {visiblePages.map((pageNumber) => (
          <button key={pageNumber} onClick={() => goTo(pageNumber)}
            className="bubble">
            {pageNumber + 1}
          </button>
        ))}

      </div>

      <button className={`small text ghost icon ${page === totalPages - 1 ? 'disabled' : ''}`}
        onClick={() => goTo(page + 1)}
        disabled={page === totalPages - 1}>
        <span className="hidden sm:inline">Next</span>
        <RightArrowBtn />
      </button>
    </div>
  );

}