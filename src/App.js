import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Underdev from "./pages/Underdev";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
          <Navbar />
        <Routes>
            <Route path='/' exact element={<Home />}/>
            <Route path='/about' exact element={<Underdev />}/>
            <Route path='/achievements' exact element={<Underdev />}/>
            <Route path='/events' exact element={<Underdev />}/>
            <Route path='/projects' exact element={<Underdev />}/>
            <Route path='/recruitment' exact element={<Underdev />}/>
            <Route path='/*' element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
