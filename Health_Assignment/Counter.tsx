
import React from 'react';

type Props = {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onAdd: () => void;
};

const Counter: React.FC<Props> = ({ count, onIncrement, onDecrement, onAdd }) => {
  return (
    <div className="text-center my-4">
      <h2 className="text-xl font-semibold">Counter</h2>
      <div className="flex justify-center items-center gap-4 my-2">
        <button onClick={onDecrement} className="bg-gray-300 px-4 py-2 rounded">-</button>
        <span className="text-2xl">{count}</span>
        <button onClick={onIncrement} className="bg-gray-300 px-4 py-2 rounded">+</button>
      </div>
      <button
        onClick={onAdd}
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
        disabled={count === 0}
      >
        Add
      </button>
    </div>
  );
};

export default Counter;
