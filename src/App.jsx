import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./Routes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <AppRoutes />

        <Footer />
      </Router>
    </>
  );
}

export default App;
