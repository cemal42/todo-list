import React, {useState} from 'react';
import './App.css';

function App() {

  const [newItem, setNewItem] = useState("")
  const [items, setItems] = useState([])

  const addItemArray = () => {

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem
    }

    if(items.length === 8){
      alert('En fazla 8 tane ekleyebilirsiniz')
      return
    }else if(!newItem){
      alert('lütfen bir todo ekleyin')
      return
    }

    setItems(oldItems => [...oldItems, item])
    setNewItem('')
  }

  const removeItem = (id) => {
    const deleteItem = items.filter((item) => item.id !== id)
    setItems(deleteItem)
  }

  return (
    <div className="App">
        <h1>Todo List</h1>
        <div className='inputButton'>
          <input value={newItem} type='text' placeholder='todo ekle' onChange={e => setNewItem(e.target.value)}/>
          <button onClick={() => addItemArray()}>ekle</button>
        </div>
        <ul>
            {items.map((item, id) => (
              <li key={id}>{item.value}<button onClick={() => removeItem(item.id)}>x</button></li>
            ))}
        </ul>
    </div>
  );
}

export default App;
