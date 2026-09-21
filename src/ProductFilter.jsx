import { useState, useTransition } from "react";

function ProductFilter() {
  const [filter, setFilter] = useState("All");
  const [isPending, startTransition] = useTransition();

  const products = [
    { id: 1, name: "Laptop", category: "Electronics" },
    { id: 2, name: "Phone", category: "Electronics" },
    { id: 3, name: "Headphones", category: "Electronics" },
    { id: 4, name: "T-Shirt", category: "Clothing" },
    { id: 5, name: "Jeans", category: "Clothing" },
    { id: 6, name: "Jacket", category: "Clothing" },
    { id: 7, name: "Apple", category: "Food" },
    { id: 8, name: "Banana", category: "Food" },
    { id: 9, name: "Orange", category: "Food" },
  ];

  function handleFilter(newFilter) {
    startTransition(() => {
      setFilter(newFilter);
    });
  }

  const filteredProducts =
    filter === "All"
      ? products
      : products.filter((product) => product.category === filter);

  return (
    <div>
      <h2>Example 10 - Product Filter</h2>

      <button onClick={() => handleFilter("All")}>
        All
      </button>

      <button onClick={() => handleFilter("Electronics")}>
        Electronics
      </button>

      <button onClick={() => handleFilter("Clothing")}>
        Clothing
      </button>

      <button onClick={() => handleFilter("Food")}>
        Food
      </button>

      {isPending && <p>Loading products...</p>}

      <h3>Selected Category: {filter}</h3>

      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            {product.name} - {product.category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductFilter;