import type { SetStateAction } from "react";

interface DropdownProps {
  setSelectedSort: React.Dispatch<SetStateAction<string>>;
}

export function Dropdown({ setSelectedSort }: DropdownProps) {
  return (
    <select onChange={(event) => setSelectedSort(event.target.value)}>
      <option defaultValue={"arc"}>Sorter efter</option>
      <option value="arc">Pris - stigende</option>
      <option value="desc">Pris - faldende</option>
      <option value="name">Titel</option>
    </select>
  );
}
