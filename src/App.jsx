import { useState, useTransition } from "react";
import SearchExample from "./SearchExample";
import LargeList from "./LargeList";
import TransitionExample from "./TransitionExample";
import TransitionSearch from "./TransitionSearch";
import TransitionTabs from "./TransitionTabs";
import TransitionList from "./TransitionList";
import TransitionForm from "./TransitionForm";
import ExpensiveCalculation from "./ExpensiveCalculation";
import ProductFilter from "./ProductFilter";

function App() {
  const [count, setCount] = useState(0);

  const [isPending, startTransition] = useTransition();

  function handleClick() {
    startTransition(() => {
      setCount((previousCount) => previousCount + 1);
    });
  }

  return (
    <div>
      <h2>22 - useTransition</h2>

      <h2>Example 1 - Basic useTransition</h2>

      <p>Count: {count}</p>

      <button onClick={handleClick}>
        Increase Count
      </button>

      {isPending && <p>Updating...</p>}

      {/* Example 2 - SearchExample */}
      <SearchExample />
      <hr />

      {/* Example 3 - Large List */}
      <LargeList />
      <hr />

      {/* Example 4 -Transition Example */}
      <TransitionExample />
      <hr />

      {/* Example 5 - Search with useTransition */}
      <TransitionSearch />
      <hr />

      {/* Example 6 - Tabs with useTransition */}
      <TransitionTabs />
      <hr />

      {/* Example 7 - Large List with useTransition */}
      <TransitionList />
      <hr />

      {/* Example 8 - Form with useTransition */}
      <TransitionForm />
      <hr />

      {/* Example 9 - Expensive Calculation */}
      <ExpensiveCalculation />
      <hr />

      {/* Example 10 - Product Filter */}
      <ProductFilter />
      <hr />

      Example 11 -
    </div>
  );
}

export default App;