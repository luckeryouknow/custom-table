import { useState } from "react";
import "./styles.css";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [tableArr, setTableArr] = useState([]);

  let targetElem;
  let tableElemId = -1;

  const contentEditableOn = (event) => {
    targetElem = event.target;
    targetElem.contentEditable = "true";
  };

  const contentEditableOff = () => {
    targetElem.contentEditable = "false";

    if (targetElem.innerHTML === "") {
      let stateArr = tableArr;
      stateArr.splice(targetElem.id, 1);

      setTableArr([...stateArr]);
    } else {
      let stateArr = tableArr;
      stateArr[targetElem.id] = targetElem.innerHTML;

      setTableArr([...stateArr]);
    }
  };

  return (
    <div className="App">
      <input onChange={(event) => setInputValue(event.target.value)}></input>
      <button onClick={() => setTableArr([...tableArr, inputValue])}>
        add
      </button>
      <div className="Table">
        {tableArr.map((tableElem) => {
          tableElemId += 1;

          return (
            <div
              className="TableElem"
              id={tableElemId}
              key={tableElemId}
              onDoubleClick={contentEditableOn}
              contentEditable="false"
              onBlur={contentEditableOff}
            >
              {tableElem}
            </div>
          );
        })}
      </div>
    </div>
  );
}
