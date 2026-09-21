import React, { useState, useTransition } from 'react'

function LargeList() {
    const [input, setInput] = useState("");
    const [list, setlist] = useState([]);

    const [isPending, startTransition] = useTransition();
    function handleChange(event) {
        const value = event.target.value;

        setInput(value);

        startTransition(() => {
            const newList = [];

            for (let i = 0; i < 5000; i++) {
                newList.push(`${value} - Item ${i + 1}`);
            }

            setlist(newList);
        });
    }
    
  return (
    <div>
    <h2>Example 3 - Large List</h2>  

    <input type="text" placeholder='Type Something...'
    value={input} onChange={handleChange}/>

    {isPending && <p>Updating large list...</p>}

    <p>Total items: {list.length}</p>

    {list.slice(0, 20).map((item, index) => (
        <p key={index}>{item}</p>
    ))}
    </div>
  );
}

export default LargeList;
