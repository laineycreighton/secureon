//----- IMPORTS -----//
import { Outlet } from "react-router-dom";

//CSS
import 'normalize.css'
import './App.css';

//Components
import Header from './pages/Header.jsx';
import Footer from './pages/Footer.jsx';

//----- EXPORTS -----//
function App() {

  //Return
  return (
    //---------- MAIN ----------//
    <div className="main">

      {/* Header */}
      <Header />

      {/* Outlet */}
      <Outlet />

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App