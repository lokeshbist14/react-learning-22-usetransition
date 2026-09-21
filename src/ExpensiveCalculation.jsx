import { useState, useTransition } from "react";

function ExpensiveCalculation() {
  const [number, setNumber] = useState(10);
  const [result, setResult] = useState(10);
  const [isPending, startTransition] = useTransition();

  function handleChange(e) {
    const value = Number(e.target.value);

    setNumber(value);

    startTransition(() => {
      let total = 0;

      for (let i = 0; i < 50000000; i++) {
        total += value;
      }

      setResult(total);
    });
  }

  return (
    <div>
      <h2>Example 9 - Expensive Calculation</h2>

      <input
        type="number"
        value={number}
        onChange={handleChange}
        min="1"
        max="100"
      />

      {isPending && <p>Calculating...</p>}

      <p>Result: {result}</p>
    </div>
  );
}

export default ExpensiveCalculation;