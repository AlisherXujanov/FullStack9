import { BrowserRouter } from 'react-router-dom'
import AllComponents from './components/AllComponents.jsx'
import Marquee from './components/common/Marquee'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AllComponents />
      </BrowserRouter>

      <Marquee />
    </div>
  );
}

export default App;
