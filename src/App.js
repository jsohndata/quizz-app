import Header from "./components/Header";
import Footer from "./components/Footer";
import Quiz from "./components/Quiz";
import 'bootstrap/dist/css/bootstrap.min.css';

import './assets/App.css';

function App() {
  return (
    <div className="parent-container">
      <Header />
      <Quiz />
      <Footer />
    </div>
  );
}

export default App;
