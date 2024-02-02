import { BrowserRouter } from 'react-router-dom'
import AllComponents from './components/AllComponents.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { context, initialState, globalReducer } from './store'
import { useReducer } from 'react';

function App() {
  const [state, dispatch] = useReducer(globalReducer, initialState)

  const value = {
    store: state,
    setStore: dispatch
  }

  return (
    <div className="App">
      <ToastContainer />

      <BrowserRouter>
        <context.Provider value={value}>
          <AllComponents />
        </context.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
