import Navbar from './Components/Navbar/Navbar';
import './App.css';
import Intro from './Components/Intro/Intro';
import Skills from './Components/Skills/Skills';
import Stitle from './Components/Skills/Stitle/Stitle';
import Ptitle from './Components/Projects/Ptitle/Ptitle';
import Projects from './Components/Projects/Projects';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Stitle/>
      <Skills/>
      <Ptitle/>
      <Projects/>
    </div>
  );
}

export default App;
