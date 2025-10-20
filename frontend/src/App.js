import { useState, useEffect, useCallback } from "react";
import { getRecords, createRecord, deleteRecord, runCommand } from "./api";
import RecordForm from "./components/RecordForm";
import RecordList from "./components/RecordList";
import CommandRunner from "./components/CommandRunner";
import "./App.css"; // Make sure CSS is imported

function App() {
  const [records, setRecords] = useState([]);
  const [search, setSearch] = useState("");

  const fetchRecords = useCallback(async () => {
    const res = await getRecords(search);
    setRecords(res.data);
  }, [search]);

  useEffect(() => {
    fetchRecords();
  }, [fetchRecords]);

  const handleAdd = async (name) => {
    await createRecord(name);
    fetchRecords();
  };

  const handleDelete = async (id) => {
    await deleteRecord(id);
    fetchRecords();
  };

  const handleRunCommand = async (command) => {
    const res = await runCommand(command);
    return res.data.output;
  };

  return (
    <div className="app-container">
      <h1>Web UI App</h1>
      <input
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <RecordForm onAdd={handleAdd} />
      <RecordList records={records} onDelete={handleDelete} />
      <h2>Run Command</h2>
      <CommandRunner onRun={handleRunCommand} />
    </div>
  );
}

export default App;
