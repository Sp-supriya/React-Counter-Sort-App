
import React from 'react';

type Props = {
  list: number[];
  onSortToggle: () => void;
  sortAsc: boolean;
  onReset: () => void;
};

const ListView: React.FC<Props> = ({ list, onSortToggle, sortAsc, onReset }) => {
  if (list.length === 0) return <p className="text-center mt-4">No values added yet.</p>;

  const max = Math.max(...list);
  const min = Math.min(...list);

  return (
    <div className="text-center my-4">
      <h2 className="text-xl font-semibold">List</h2>
      <div className="flex justify-center gap-4 mt-2">
        <button onClick={onSortToggle} className="bg-green-500 text-white px-4 py-2 rounded">
          Sort: {sortAsc ? 'Ascending' : 'Descending'}
        </button>
        <button onClick={onReset} className="bg-red-500 text-white px-4 py-2 rounded">
          Reset List
        </button>
      </div>
      <ul className="mt-4 space-y-1">
        {list.map((num, idx) => (
          <li
            key={idx}
            className={\`text-lg \${num === max ? 'text-green-600 font-bold' : ''} \${num === min ? 'text-red-600 font-bold' : ''}\`}
          >
            {num}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListView;
