import React, { useState, useTransition } from 'react'

function TransitionSearch() {
    const [input, setInput] = useState("");
    const [search, setSearch] = useState("");
    const [isPending, startTransition] = useTransition();

    const items = Array.from({lenght: 1000}, (__, index) => {
        return `Item ${index + 1}`;
    });

    const filteredItems = items.filter((item) => 
    item.toLowerCase().includes(search.toLowerCase()));

    function handleChange(e) {
        const value = e.target.value;

        setInput(value);

        startTransition(() => {
            setSearch(value);
        });
    }
    
  return (
    <div>
      <h2>Example 5 - Search with useTransition</h2>

      <input type="text" value={input} onChange={handleChange} placeholder='Search items...'/>

      {isPending && <p>Searching...</p>}

      <p>Results : {filteredItems.length}</p>

      <ul>
        {filteredItems.slice(0, 20).map((item) => (
            <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default TransitionSearch;
