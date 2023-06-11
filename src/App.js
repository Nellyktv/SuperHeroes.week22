
import './App.css';
import './components/style.css';
import Hero from './components/Hero';
import superheroes from './superheroes.json';



function App() {
  return (
    <div className="App">{
      superheroes.map((superheroes) =>
      <Hero name={superheroes.name} url={superheroes.url} universe={superheroes.universe} alterego={superheroes.alterego} occupation={superheroes.occupation} friends={superheroes.friends} superpowers={superheroes.superpowers}  />
    )
    }
    </div>
  );
}

export default App;
