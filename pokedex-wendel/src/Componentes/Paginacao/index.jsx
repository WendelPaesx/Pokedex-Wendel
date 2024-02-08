import react from "react";

const Paginacao = ({ currentPage, totalPages, onPageChange }) => {
  const range = (start, end) => {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };
  return (
    <div>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {range(1, totalPages).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          style={{
            fontWeight: currentPage === page ? "bold" : "normal",
            visibility: page <= totalPages ? "visible" : "hidden"
          }}
          disabled={currentPage === page}
        >
             {page === currentPage ? page : null}
          
        </button>
      ))}
      <button
      onClick={()=> onPageChange(currentPage +1)}
      disabled ={currentPage===totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Paginacao;
