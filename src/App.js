import logo from './logo.svg';
import './App.css';
import ContactNav from './Component/ContactNav/ContactNav';
import ContactContent from './Component/ContactContent/ContactContent';
function App() {
  return (
    <div className="App">
    <ContactNav/>
    <ContactContent/>
    </div>
  );
}

export default App;
