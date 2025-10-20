export default function RecordList({ records, onDelete }) {
  return (
    <ul>
      {records.map((r) => (
        <li key={r.id}>
          {r.name} <button onClick={() => onDelete(r.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
