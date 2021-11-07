import Header from './components/Header';
import Home from './pages/Home';
import Offers from './pages/Offers';
import Campaigns from './pages/Campaigns';
import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
      <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="offers" element={<Offers />} />
        <Route path="campaigns" element={<Campaigns />} />
      </Routes>
      </div>
  );
}

export default App;
