import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./pages/main/Main";
import About from "./pages/About/About";
import Navbar from "./pages/Navbar/Navbar";
import Footers from "./pages/Footers/Footers";

function App() {
  return (
   <div className="bodyxz">
     <div className="container bodyx">
    <Navbar />
    <div className="row">
      <div className="col-md-3">
        <About />
      </div>
      
     
      <div className="col-md-9">
        <Main />
      </div>
    </div>
    <Footers/>
  </div>
   </div>
  
  );
}

export default App;
