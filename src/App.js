import Header from "./components/Header";
import Footer from "./components/Footer";
import Quiz from "./components/Quiz";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

function App() {
  return (
    <div className="main-container">
      <Header />
      <Quiz />
      <Footer />
    </div>
  );
}

export default App;
