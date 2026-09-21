import { useState, useTransition } from "react";

function SearchExample() {
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");

  const [isPending, startTransition] = useTransition();

  function handleChange(event) {
    const value = event.target.value;

    setInput(value);

    startTransition(() => {
      setSearch(value);
    });
  }

  return (
    <div>
      <h2>Example 2 - Search with useTransition</h2>

      <input
        type="text"
        placeholder="Search..."
        value={input}
        onChange={handleChange}
      />

      {isPending && <p>Searching...</p>}

      <p>
        Search result for: <strong>{search}</strong>
      </p>
    </div>
  );
}

export default SearchExample;