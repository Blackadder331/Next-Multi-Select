"use client";
import { useState } from "react";
import styles from "./multi-select.module.scss";

function MultiSelect() {
  // VERSION 1
  //   console.log("Hello World");

  //   return (
  //     <div>
  //       <h1>I am a Multi Select Component</h1>
  //     </div>
  //   );

  // VERSION 2
  //   const options = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"];
  //   const [selectedOptions, setSelectedOptions] = useState([]);

  //   const handleSelect = (event) => {
  //     const value = event.target.value;
  //     setSelectedOptions((prevState) =>
  //       prevState.includes(value)
  //         ? prevState.filter((option) => option !== value)
  //         : [...prevState, value]
  //     );
  //   };

  //   return (
  //     <div>
  //       {options.map((option) => (
  //         <div key={option}>
  //           <label>
  //             <input
  //               type="checkbox"
  //               value={option}
  //               onChange={handleSelect}
  //               checked={selectedOptions.includes(option)}
  //             />
  //             {option}
  //           </label>
  //         </div>
  //       ))}
  //       <p>Selected options: {selectedOptions.join(", ")}</p>
  //     </div>
  //   );
  // }

  // VERSION 3
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
        {(selectedOptions.length > 0
          ? selectedOptions.join(", ")
          : "Select options...") + (isOpen ? "▲" : "▼")}
      </div>
      {isOpen && (
        <div style={{  }} className={styles.selections}>
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
