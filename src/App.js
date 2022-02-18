import React, { useState } from "react";
import InputBox from "./components/InputBox";
import List from "./components/List";
import "./App.css";

function App() {
  let [listItems, setListItems] = useState([{}]);
  let done = false;

  function addNewItem(text) {
    setListItems((prevItems) => [
      ...listItems,
      {
        text: text,
        done: false,
      },
    ]);
  }

  function removeItem(index) {
    if (window.confirm("Vill du ta bort uppgiften?")) {
      setListItems((prevItems) => {
        return [...prevItems.slice(0, index), ...prevItems.slice(index + 1)];
      });
    }
  }

  function makeDone(index, text, e) {
    let newList = [...listItems];
    let isChecked = e.target.checked;

    done = isChecked ? true : false;
    console.log(isChecked);

    newList[index].done = done;
    newList[index].text = text;
    setListItems(newList);
  }

  return (
    <div className="main">
      <h1 className="header">ATT GÖRA</h1>
      <InputBox value="" add={addNewItem} />
      <List
        className="list"
        listItems={listItems}
        makeDone={makeDone}
        remove={removeItem}
      />
    </div>
  );
}

export default App;
