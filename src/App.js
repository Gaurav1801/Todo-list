import './App.css';
import React from 'react';
import { useState } from 'react';

function App() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editItem, setEditItem] = useState("");

  const itemChange = (e) => {
    setItem(e.target.value);
  };

  const addItem = () => {
    if (item.trim() !== "") {
      setList((oldItems) => [...oldItems, item]);
      setItem("");
    }
  };

  const removeItem = (id) => {
    setList((oldItems) => oldItems.filter((_, index) => index !== id));
  };

  const startEditItem = (index) => {
    setEditIndex(index);
    setEditItem(list[index]);
  };

  const editItemChange = (e) => {
    setEditItem(e.target.value);
  };

  const saveEditItem = () => {
    setList((oldItems) =>
      oldItems.map((item, index) => (index === editIndex ? editItem : item))
    );
    setEditIndex(null);
    setEditItem("");
  };

  return (
    <div className="">
      <div className="w-50 rounded-4 m-auto text-center pb-4 mt-5" style={{ backgroundColor: "lightblue", height:"600px" }}>
        <h1 className='text-success text-center mb-4'>Todo list</h1>
        <input
          type="text"
          value={item}
          className='border-4 border-success rounded-3 text-center'
          placeholder='Add Task'
          onChange={itemChange}
        />
        <button
          type='button'
          className='btn border-0 rounded-5 mx-5 p-2 btn-secondary'
          onClick={addItem}
        >
          +
        </button>
        <ul className='list-unstyled m-auto w-50'>
          {list.map((listItem, index) => (
            <li className='fs-5 m-2 ps-5 rounded-3 bg-success' key={index}>
              {editIndex === index ? (
                <>
                  <input
                    type="text"
                    value={editItem}
                    onChange={editItemChange}
                    className='border-4 border-success rounded-3'
                  />
                  <button
                    className='btn me-auto btn-success border-0 rounded-5 mx-4 p-2'
                    onClick={saveEditItem}
                  >
                    Save
                  </button>
                </>
              ) : (
                <>
                  {listItem}
                
                <>
                <button
                className='btn me-auto btn-success border-0 rounded-5 mx-4 p-2'
                onClick={() => startEditItem(index)}
              >
                Edit
              </button>
              <button
                className='btn me-auto btn-danger border-0 rounded-5 mx-4 p-2'
                onClick={() => removeItem(index)}
              >
                X
              </button>
              </>
              </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
