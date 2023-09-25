//----- IMPORTS -----//
import { Outlet } from "react-router-dom";

//CSS
import 'normalize.css'
import './App.css';

//Components
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

//----- EXPORTS -----//
function App() {

  //Return
  return (
    //---------- MAIN ----------//
    <div className="main">

      {/* Header */}
      <Header />

      <div className="outlet">
        {/* Outlet */}
        <Outlet />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App