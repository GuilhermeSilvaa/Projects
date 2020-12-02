import React, { useState, useEffect, useMemo, useCallback } from 'react';

function App() {

  const [tarefas, setTarefas] = useState([]);

  const [input, setInput] = useState('');

  useEffect(() => {
    const tarefasStorage = localStorage.getItem('tarefas');

    if(tarefasStorage){
      setTarefas(JSON.parse(tarefasStorage));

    }

  }, []);


//quando o tarefas sofrer alteração, esta função ira fazer algo, neste caso, guarda no localstorage
  useEffect(() => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }, [tarefas]);


  const handleAdd = useCallback (() => {
    setTarefas([...tarefas, input]);
    setInput('');
  }, [input, tarefas]);

  const totalTarefas = useMemo(() => tarefas.length, [tarefas]);


  return (
    <div>
      <ul>
        {tarefas.map(tarefa =>(
          <li key={tarefa}> {tarefa} </li>
        ))}
      </ul>
      <br/>
        <strong>Voce tem {totalTarefas} tarefas! </strong>
        <br/>
          
      <input type="text" value={input} 
        onChange={(e) => setInput(e.target.value) }/>
        
      <button type="button" onClick={handleAdd} >Adicionar</button>

    </div>
  );
}

export default App;
