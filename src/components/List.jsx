import React from "react";
import ListItem from "./ListItem";
import "../App.css";

function List(props) {
  return (
    <div className="list">
      {props.listItems.map((listItem, i) => {
        if (i > 0)
          return (
            <ListItem
              makeDone={props.makeDone}
              remove={props.remove}
              index={i}
              key={`li_${i}`}
              text={listItem.text}
              done={listItem.done}
            />
          );
      })}
    </div>
  );
}

export default List;
