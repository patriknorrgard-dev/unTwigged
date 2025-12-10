import { useRef } from "react";

interface SearchProps {
  onSearch: (value: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onSearch(inputRef.current?.value ?? "");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        ref={inputRef}
        placeholder="e.g. frontend developer"
      />
      <button type="submit" hidden>Search</button>
    </form>
  )
}

export default Search;