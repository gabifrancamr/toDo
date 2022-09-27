import './App.css';
import React, {useState} from "react"
import ListaTarefasContext from './services/ListaTarefas/ListaTarefasContext';
import { ListaTarefasContextBuilder } from './services/ListaTarefas/ListaTarefasServices';
import ListaTarefasPage from './components/ListaTarefasPage';

function App() {
  
  const controleDeTarefas = ListaTarefasContextBuilder(useState([]));

  return(
    <div className='App'>
      <div className='App'>
          <ListaTarefasContext.Provider value={controleDeTarefas}>
            <ListaTarefasPage></ListaTarefasPage>
          </ListaTarefasContext.Provider>
      </div>
    </div>
  )
}

export default App;
