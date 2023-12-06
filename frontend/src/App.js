import Navigation from './components/Navigation'
import About from './components/About'
import { BrowserRouter } from 'react-router-dom'
import AllComponents from './components/AllComponents.jsx'


function App() {
  return (
    <div className="App">
      <nav>
        <Navigation />
      </nav>

      <section>
        <About title={"About page"}>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique mollitia voluptate quibusdam corrupti, sapiente, reprehenderit possimus eius optio fuga quasi atque quos exercitationem laudantium totam? Aspernatur enim nihil dolorem ipsa.</p>
        </About>
      </section>
    </div>
  );
}

export default App;
