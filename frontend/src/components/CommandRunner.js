import { useState } from "react";

export default function CommandRunner({ onRun }) {
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState("");

  const handleRun = async () => {
    const res = await onRun(command);
    setOutput(res);
  };

  return (
    <div>
      <input
        aria-label="Command input"
        placeholder="Enter command"
        value={command}
        onChange={(e) => setCommand(e.target.value)}
      />
      <button onClick={handleRun}>Run</button>
      <pre>{output}</pre>
    </div>
  );
}
