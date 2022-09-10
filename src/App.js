import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState();
  useEffect(() => {
    fetchApi();
  }, []);

  const endpoint = 'https://jsonplaceholder.typicode.com/todos';

  const fetchApi = async () => {
    const data = await (await fetch(endpoint)).json();
    setTodos(data);
    console.log('data=', data);
  };
  return (
    <div className='App'>
      <h1>Todos</h1>
      <ul>
        {!todos
          ? 'Loading......'
          : todos.map((todo, index) => (
              <li key={index}>
                {todo.title} {todo.completed ? '✅' : 'X'}
              </li>
            ))}
      </ul>
    </div>
  );
}

export default App;
