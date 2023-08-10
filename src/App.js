import { Outlet } from 'react-router-dom'
import './App.css';
import Header from './components/Cheeze'

const App = () => {
  return (
    <div className="App">
     <h1>Cheezy App</h1>
     <Header />
     <Outlet />
    </div>
  );
}

export default App;
