import { useState, useTransition } from "react";

function TransitionList() {
  const [category, setCategory] = useState("All");
  const [isPending, startTransition] = useTransition();

  const items = Array.from({ length: 5000 }, (_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,
    category: index % 2 === 0 ? "Electronics" : "Clothing",
  }));

  function handleCategoryChange(newCategory) {
    startTransition(() => {
      setCategory(newCategory);
    });
  }

  const filteredItems =
    category === "All"
      ? items
      : items.filter((item) => item.category === category);

  return (
    <div>
      <h2>Example 7 - Large List with useTransition</h2>

      <button onClick={() => handleCategoryChange("All")}>
        All
      </button>

      <button onClick={() => handleCategoryChange("Electronics")}>
        Electronics
      </button>

      <button onClick={() => handleCategoryChange("Clothing")}>
        Clothing
      </button>

      {isPending && <p>Updating list...</p>}

      <p>
        Showing {filteredItems.length} products
      </p>

      <ul>
        {filteredItems.slice(0, 30).map((item) => (
          <li key={item.id}>
            {item.name} - {item.category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransitionList;