const PaginationControls = ({
  currentPage,
  setCurrentPage,
  totalItems,
  itemsPerPage,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className="flex justify-center gap-3.5 items-center mt-4">
      <button
        onClick={handlePrevPage}
        disabled={currentPage === 1}
        className="px-4 py-2 rounded-md cursor-pointer disabled:cursor-auto"
      >
        Previous
      </button>
      <span>
        Page {currentPage} of {Math.ceil(totalItems / itemsPerPage)}
      </span>
      <button
        onClick={handleNextPage}
        disabled={currentPage === Math.ceil(totalItems / itemsPerPage)}
        className="px-4 py-2 rounded-md cursor-pointer disabled:cursor-auto"
      >
        Next
      </button>
    </div>
  );
};

export default PaginationControls;
