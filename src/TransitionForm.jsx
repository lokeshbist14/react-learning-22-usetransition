import { useState, useTransition } from "react";

function TransitionForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isPending, startTransition] = useTransition();

  function handleSubmit(e) {
    e.preventDefault();

    startTransition(() => {
      setMessage(`Hello, ${name}! Your form was submitted.`);
    });
  }

  return (
    <div>
      <h2>Example 8 - Form with useTransition</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />

        <button type="submit" disabled={isPending}>
          {isPending ? "Submitting..." : "Submit"}
        </button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}

export default TransitionForm;