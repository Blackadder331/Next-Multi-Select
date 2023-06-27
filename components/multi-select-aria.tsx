"use client";
"use strict";
import styles from "./multi-select.module.scss";
import { useState, useRef, useEffect } from "react";

function MultiSelectARIA() {
  const options = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"];
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const listboxRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLSpanElement>(null); // New ref for the arrow

  const handleSelect = (option: string) => {
    setSelectedOptions((prevState) =>
      prevState.includes(option)
        ? prevState.filter((o) => o !== option)
        : [...prevState, option]
    );
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setActiveIndex(-1);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowDown":
          event.preventDefault();
          setIsOpen(true);
          setActiveIndex((prevIndex) => (prevIndex + 1) % options.length);
          break;
        case "ArrowUp":
          event.preventDefault();
          setIsOpen(true);
          setActiveIndex(
            (prevIndex) => (prevIndex - 1 + options.length) % options.length
          );
          break;
        case "Enter":
        case " ":
          event.preventDefault();
          if (isOpen && activeIndex >= 0) {
            handleSelect(options[activeIndex]);
          } else {
            setIsOpen(!isOpen);
          }
          break;
        case "Escape":
          setIsOpen(false);
          break;
        default:
          break;
      }
    };

    const handleArrowKeyDown = (event: KeyboardEvent) => {
      if (event.key === " ") {
        event.preventDefault();
        toggleDropdown();
      }
    };

    listboxRef.current?.addEventListener("keydown", handleKeyDown);
    arrowRef.current?.addEventListener("keydown", handleArrowKeyDown);
    return () => {
      listboxRef.current?.removeEventListener("keydown", handleKeyDown);
      arrowRef.current?.removeEventListener("keydown", handleArrowKeyDown);
    };
  }, [options.length, isOpen, activeIndex]);

  return (
    <div
      className={styles.container}
      ref={listboxRef}
      tabIndex={0}
      role="listbox"
      aria-haspopup="true"
      aria-expanded={isOpen}
      aria-activedescendant={
        isOpen && activeIndex >= 0
          ? `option-${options[activeIndex]}`
          : undefined
      }
    >
      <div
        onClick={toggleDropdown}
        onKeyDown={(event) => {
          if (event.key === " " || event.key === "Enter") {
            event.preventDefault();
            toggleDropdown();
          }
        }}
        className={styles.selector}
        tabIndex={0}
        role="button"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <span>
          {selectedOptions.length > 0
            ? selectedOptions.join(", ")
            : "Select options..."}
        </span>
        <span
          ref={arrowRef}
          tabIndex={0} // Make the arrow focusable
          className={styles.arrow}
        >
          {isOpen ? "▲" : "▼"}
        </span>
      </div>
      {isOpen && (
        <div
          style={{}}
          className={styles.selections}
          aria-owns={options
            .map((option, index) => `option-${index}`)
            .join(" ")}
        >
          {options.map((option, index) => (
            <div
              key={option}
              role="option"
              id={`option-${index}`}
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
