//----- IMPORTS -----//

//CSS
import '../assets/css/Header.css';

//----- EXPORTS -----//
export default function Header() {

    //Return
    return (
        //---------- HEADER ----------//
        <div className='header-container'>
            <header>
                <h1>SECUREON</h1>
                <p>secure beyond</p>
            </header>
            <div className='cyber'>
                <p>PASSWORD GENERATOR</p>
            </div>
        </div>
    )
}