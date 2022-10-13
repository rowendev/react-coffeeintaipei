import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Taipei from "./components/Taipei";
import NavBar from "./layout/NavBar";
import Footer from "./layout/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Taipei />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
