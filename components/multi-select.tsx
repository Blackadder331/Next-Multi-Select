"use client";
import { useState } from "react";
import styles from "./multi-select.module.scss";

function MultiSelect() {
  const options = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"];
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: string) => {
    setSelectedOptions((prevState) =>
      prevState.includes(option)
        ? prevState.filter((o) => o !== option)
        : [...prevState, option]
    );
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div onClick={toggleDropdown} className={styles.selector}>
        <span>
          {selectedOptions.length > 0
            ? selectedOptions.join(", ")
            : "Select options..."}
        </span>
        <span className={styles.arrow}>{isOpen ? "▲" : "▼"}</span>
      </div>
      {isOpen && (
        <div style={{}} className={styles.selections}>
          {options.map((option) => (
            <div key={option}>
              <label>
                <input
                  type="checkbox"
                  value={option}
                  onChange={() => handleSelect(option)}
                  checked={selectedOptions.includes(option)}
                />
                {option}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MultiSelect;
