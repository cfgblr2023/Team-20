import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
// import "./App.css";
import Home  from "./pages/Home";
import Courses  from "./pages/Courses";
function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;