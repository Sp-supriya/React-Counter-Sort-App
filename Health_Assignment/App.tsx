
import React, { useState, useEffect } from 'react';
import Counter from './components/Counter';
import ListView from './components/ListView';

const App: React.FC = () => {
  const [count, setCount] = useState(0);
  const [list, setList] = useState<number[]>([]);
  const [sortAsc, setSortAsc] = useState(true);

  useEffect(() => {
    const storedList = localStorage.getItem('numberList');
    if (storedList) setList(JSON.parse(storedList));
  }, []);

  useEffect(() => {
    localStorage.setItem('numberList', JSON.stringify(list));
  }, [list]);

  const addToList = () => {
    if (count > 0 && !list.includes(count)) {
      const updatedList = [...list, count];
      setList(updatedList);
      setCount(0);
    }
  };

  const toggleSort = () => {
    setSortAsc(!sortAsc);
    const sorted = [...list].sort((a, b) => (sortAsc ? b - a : a - b));
    setList(sorted);
  };

  const resetList = () => {
    setList([]);
    localStorage.removeItem('numberList');
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <Counter
        count={count}
        onIncrement={() => setCount(count + 1)}
        onDecrement={() => setCount(Math.max(0, count - 1))}
        onAdd={addToList}
      />
      <ListView list={list} onSortToggle={toggleSort} sortAsc={sortAsc} onReset={resetList} />
    </div>
  );
};

export default App;
