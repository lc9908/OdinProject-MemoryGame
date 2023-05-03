import "./App.css";
import Board from "./component/Board";
import Footer from "./Footer";


function App() {

  return (
    <div className="app">
      <h1 className="title"> League of Memory </h1>
      <Board/>
      <Footer/>
    </div>
  );
}

export default App;

