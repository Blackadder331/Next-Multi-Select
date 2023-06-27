"use client";
import styles from "./multi-select.module.scss";
import { useState, useRef, useEffect } from "react";

function MultiSelectARIA() {
  const options = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"];
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [focusIndex, setFocusIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleSelect = (option: string) => {
    setSelectedOptions((prevState) =>
      prevState.includes(option)
        ? prevState.filter((o) => o !== option)
        : [...prevState, option]
    );
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setFocusIndex(-1); // reset focus when opening or closing
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowDown") {
        event.preventDefault();
        setFocusIndex((prev) => (prev + 1) % options.length);
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        setFocusIndex((prev) => (prev - 1 + options.length) % options.length);
      }
    };

    if (isOpen) {
      containerRef.current?.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      containerRef.current?.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, options.length]);

  return (
    <div
      className={styles.container}
      role="listbox"
      aria-haspopup="true"
      aria-expanded={isOpen}
      ref={containerRef}
      tabIndex={0} // To allow focus
      aria-activedescendant={
        isOpen && focusIndex >= 0 ? `option-${options[focusIndex]}` : undefined
      }
    >
      <div onClick={toggleDropdown} className={styles.selector}>
        <span>
          {selectedOptions.length > 0
            ? selectedOptions.join(", ")
            : "Select options..."}
        </span>
        <span className={styles.arrow}>{isOpen ? "▲" : "▼"}</span>
      </div>
      {isOpen && (
        <div
          style={{}}
          className={styles.selections}
          aria-owns={options.map((option) => `option-${option}`).join(" ")}
        >
          {options.map((option, index) => (
            <div
              key={option}
              role="option"
              id={`option-${option}`}
              aria-selected={selectedOptions.includes(option)}
            >
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

export default MultiSelectARIA;
