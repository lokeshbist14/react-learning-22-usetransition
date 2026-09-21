import { useState, useTransition } from "react";

function TransitionTabs() {
  const [tab, setTab] = useState("Home");
  const [isPending, startTransition] = useTransition();

  function handleTabChange(newTab) {
    startTransition(() => {
      setTab(newTab);
    });
  }

  return (
    <div>
      <h2>Example 6 - Tabs with useTransition</h2>

      <button onClick={() => handleTabChange("Home")}>
        Home
      </button>

      <button onClick={() => handleTabChange("About")}>
        About
      </button>

      <button onClick={() => handleTabChange("Contact")}>
        Contact
      </button>

      {isPending && <p>Loading tab...</p>}

      {tab === "Home" && (
        <div>
          <h3>Home</h3>
          <p>Welcome to the Home page.</p>
        </div>
      )}

      {tab === "About" && (
        <div>
          <h3>About</h3>
          <p>This is the About page.</p>
        </div>
      )}

      {tab === "Contact" && (
        <div>
          <h3>Contact</h3>
          <p>This is the Contact page.</p>
        </div>
      )}
    </div>
  );
}

export default TransitionTabs;