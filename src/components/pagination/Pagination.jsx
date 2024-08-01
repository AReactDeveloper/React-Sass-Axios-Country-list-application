import React from 'react';
import {useContext} from 'react';
import './pagination.scss'
import {ThemeContext} from '../../context/ThemeContext'


export default function Pagination({ pages, currentPage, handlePageChange }) {
  const {theme , toggleTheme} = useContext(ThemeContext)

  const generatePageNumbers = () => {
    const pageNumbers = [];
    const visiblePages = 3; // Number of pages to show around the current page
    const firstPages = 2; // Number of pages to always show at the start
    const lastPages = 1; // Number of pages to always show at the end

    for (let i = 1; i <= pages; i++) {
      if (
        i <= firstPages || // Always show the first few pages
        i > pages - lastPages || // Always show the last few pages
        (i >= currentPage - visiblePages && i <= currentPage + visiblePages) // Show pages around the current page
      ) {
        pageNumbers.push(i);
      } else if (
        i === currentPage - visiblePages - 1 || 
        i === currentPage + visiblePages + 1
      ) {
        pageNumbers.push('...');
      }
    }

    // Remove consecutive ellipses
    return pageNumbers.filter((item, pos, arr) => item !== '...' || arr[pos - 1] !== '...');
  };

  const pageNumbers = generatePageNumbers();

  return (
      <ul className={theme == 'light' ? 'paginationList' : 'paginationList dark'}>
        {pageNumbers.map((page, index) => (
          <li key={index}>
            {page === '...' ? (
              <span className="ellipsis">...</span>
            ) : (
              <button
                onClick={() => handlePageChange(page)}
                className={page === currentPage ? 'active' : ''}
              >
                {page}
              </button>
            )}
          </li>
        ))}
      </ul>
  );
}
