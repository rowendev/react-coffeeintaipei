import React from "react";
import { conditions } from "../data/condition";

function District({ district }) {
  const handleOnChange = () => {};
  return (
    <div>
      <h1>{district}</h1>
      <div className="filter">
        <div className="filterItem">
          <h3>透過以下分類搜尋:</h3>
          <div className="filter_heading">
            <h4>飯店設施</h4>
            {/* <FaChevronDown /> */}
          </div>
          <ul>
            {conditions.map(({ name, desc }, index) => {
              return (
                <li key={index}>
                  <input
                    type="checkbox"
                    name={name}
                    id={`checkbox-${index}`}
                    value={name}
                    onChange={() => handleOnChange(index)}
                  />
                  <label htmlFor={`checkbox-${index}`}>{desc}</label>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default District;
