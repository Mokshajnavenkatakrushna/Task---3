import { useState } from "react";

export default function RecordForm({ onAdd }) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    onAdd(name);
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        aria-label="Record name"
        placeholder="Enter record name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}
