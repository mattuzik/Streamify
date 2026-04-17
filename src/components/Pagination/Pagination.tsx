import React from 'react';

interface PaginationProps {
  count: number;
  page: number;
  onChange: (event: React.MouseEvent, value: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ count, page, onChange }) => {
  const getPages = () => {
    const range: (number | string)[] = [];
    const siblingCount = 1;

    for (let i = 1; i <= count; i++) {
      if (i === 1 || i === count || (i >= page - siblingCount && i <= page + siblingCount)) {
        range.push(i);
      } else if (range[range.length - 1] !== '...') {
        range.push('...');
      }
    }

    return range;
  };

  return (
    <nav className="pagination">
      {getPages().map((item, index) => {
        if (item === '...') {
          return <span key={`dots-${index}`} style={{ padding: '0 8px' }}>...</span>;
        }

        const isSelected = item === page;

        return (
          <button
            key={item}
            onClick={(e) => onChange(e, item as number)}
            className={`pagination__circle ${isSelected ? 'selected' : ''}`}
          >
            {item}
          </button>
        );
      })}
    </nav>
  );
};

export default Pagination;
