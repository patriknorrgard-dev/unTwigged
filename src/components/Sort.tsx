interface SortProps {
  sort: string;
  onChangeSort: (value: string) => void;
}

const Sort: React.FC<SortProps> = ({ sort, onChangeSort }) => {
  return (
    <div style={{ display: "flex", justifyContent: "right", gap: "0.5rem" }}>
      Sort:
      <select value={sort} onChange={(e) => onChangeSort(e.target.value)}>
        <option value="TITLE">by title</option>
        <option value="CHANGED">by last updated</option>
        <option value="CREATED">by newly created</option>
      </select>
    </div>
  )
}

export default Sort;