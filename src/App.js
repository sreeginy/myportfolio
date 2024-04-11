import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/home';
import About from './components/about/About'

function App() {
  return (
    <>
    
    <Header />
    
    <main className='main'> 

    <Home />
    <About />

    </main>

    </>
  );
}

export default App;
