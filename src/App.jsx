//----- IMPORTS -----//
import { Outlet } from "react-router-dom";

//CSS
import 'normalize.css'
import './App.css';

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