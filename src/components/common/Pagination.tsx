type PaginationProps = {
  currentPage: number;
  totalPages: number;
};

export function Pagination({ currentPage, totalPages }: PaginationProps) {
  if (totalPages <= 1) {
    return null;
  }

  return (
    <nav className="pagination" aria-label="Phan trang">
      {Array.from({ length: totalPages }, (_, index) => {
        const page = index + 1;

        return (
          <span className={page === currentPage ? "active" : ""} key={page}>
            {page}
          </span>
        );
      })}
    </nav>
  );
}
