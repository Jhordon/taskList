import { useState } from "react";

export const List = (props) => {

  const [isShown, setIsShown] = useState(false);

  return (
    <div className="list">
      <h1> Tasks To Do: </h1>
      {props.itemList.map((task, key) => {
        return (
          <div className="taskItem"
            key={key}
            style={{ backgroundColor: task.completed ? "#8DA077" : "FAF8F0" }}
          >
            <p onMouseDown={() => setIsShown(!isShown)}
            > {task.task} </p>
            {isShown &&
              <>
                <button className="button" onClick={() => props.completeTask(task.id)}> Complete </button>
                <button className="button" onClick={() => props.deleteTask(task.id)}> Delete </button>
              </>
            }
          </div>
        );
      })}
    </div>
  );
}