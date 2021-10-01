import React from "react";

const Pagination = ({ coinsPerPage, totalCoins, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCoins / coinsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav aria-label="pagination" className="d-flex justify-content-center">
      <ul className="pagination ">
        {pageNumbers.map((page) => (
          <li key={page} className="page-item" aria-current="page">
            <a
              onClick={() => paginate(page)}
              href="!#"
              class="page-link text-dark"
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
