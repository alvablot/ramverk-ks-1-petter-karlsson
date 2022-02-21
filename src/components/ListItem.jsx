import React from "react";
import trashImg from "../assets/bin.png";
import "../App.css";

let taskStyle;
let status;
function ListItem(props) {
  const { index, text, done, makeDone, remove } = props;

  function mapList() {
    if (done) {
      taskStyle = "listItemDone";
      status = "Klar!";
    } else {
      taskStyle = "listItemUnDone";
      status = "Ej utförd";
    }
    return (
      <div className={taskStyle}>
        <b>Uppgift {index}</b>
        <div className="task">{text}</div>
        <div className="listHeader">
          <div className="listChild">
            <input
              className="checkbox"
              type="checkbox"
              onChange={(e) => {
                return makeDone(index, text, e);
              }}
            />
            Markera som klar
          </div>

          <div className="listChild">
            Status: <i>{status}</i>
          </div>
          <div
            className="listChild"
            style={{ textAlign: "right", width: "100px" }}
          >
            <a
              href="#"
              onClick={() => {
                return remove(index);
              }}
            >
              <img
                width="25"
                className="bin"
                src={trashImg}
                title="Ta bort uppgift!"
              />
            </a>
          </div>
        </div>
      </div>
    );
  }

  return mapList();
}

export default ListItem;
