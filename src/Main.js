import { useState } from 'react';
import { List } from './components/List';
import { Menu } from './components/Menu';
import './Main.css';

function Main() {

  const [task, setTask] = useState("");
  const [itemList, setItemList] = useState([])
  const [showMenu, setShowMenu] = useState(false);

  const addTask = () => {
    const taskItem = {
      id: itemList.length === 0 ? 1 : itemList[itemList.length - 1].id + 1,
      task: task,
      completed: false
    }

    setItemList([...itemList, taskItem]);
  }

  const deleteTask = (id) => {
    const items = itemList.filter((taskItem) => {
      if (taskItem.id === id) {
        return false;
      } else {
        return true;
      }
    })
    setItemList(items);
  }

  const completeTask = (id) => {
    setItemList(
      itemList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    )
  }

  return (
    <div className="card">
      <div className="navbar">
        <button className="button" onClick={() => {
          setShowMenu(!showMenu);
        }}> Theme </button>
        <input className="input" type="text" placeholder="Task" onChange={(event) => {
          setTask(event.target.value);
        }} />
        <button className="button" onClick={addTask}> Add </button>
      </div>
      <div className="content">
        {/* toggleable state to display the menu and taskitems */}
        {showMenu ? <Menu /> : <List itemList={itemList} completeTask={completeTask} deleteTask={deleteTask}/>}
      </div>
    </div >
  );
}

export default Main;
