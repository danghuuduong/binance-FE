import { FunctionComponent, useState } from "react";

interface ButtonProps {
  handlegetPage?: (page: number) => void;
}
const Pagination: FunctionComponent<ButtonProps> = ({ handlegetPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
    handlegetPage && handlegetPage(currentPage + 1);
  };

  const handlePrev = () => {
    setCurrentPage(currentPage - 1);
    handlegetPage && handlegetPage(currentPage - 1);
  };

  const pageList = [...Array(5)].map((_, index) => index + 1);

  return (
    <nav aria-label="Page navigation example">
      <ul className="flex items-center -space-x-px h-8 text-sm">
        <li>
          <button
            onClick={handlePrev}
            className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700"
            disabled={currentPage === 1}
          >
            <span className="sr-only">Previous</span>
            <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
            </svg>
          </button>
        </li>

        {pageList.map((pageNumber, index) => (
          <li key={pageNumber}>
            <button
              onClick={() => {
                setCurrentPage(index + 1)
                handlegetPage && handlegetPage(index + 1);
              }}
              className={`flex items-center justify-center px-3 h-8 leading-tight ${currentPage === pageNumber
                ? "z-10 text-white border-blue-300 bg-gray-600 hover:bg-blue-100 hover:text-blue-700"
                : "text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                }`}
            >
              {pageNumber}
            </button>
          </li>
        ))}

        <li>
          <button
            onClick={handleNext}
            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700"
            disabled={currentPage === totalPages}
          >
            <span className="sr-only">Next</span>
            <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
