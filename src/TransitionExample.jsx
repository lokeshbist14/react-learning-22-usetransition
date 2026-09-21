import React, { useState, useTransition } from 'react'

function TransitionExample() {
    const [count, setCount] = useState(0);
    const [isPending, startTransition] = useTransition();

    function handleClick() {
        startTransition(() => {
            setCount((previousCount) => previousCount + 1);
        });
    }

  return (
    <div>
      <h2>Example 4 - Transition with Heavy Update</h2>

      <p>Count: {count}</p>

      <button onClick={handleClick}>
        Increase Count
      </button>
      
      {isPending && <p>Updating...</p>}
    </div>
  );
}

export default TransitionExample;
