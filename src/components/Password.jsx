//----- IMPORTS -----//
import { Link } from 'react-router-dom';

//CSS
import '../assets/css/Password.css';

//----- EXPORTS -----//
export default function Password() {

    //Return
    return (
        //---------- PASSWORD ----------//
        <div className='password-container'>
            <h2>YOUR PASSWORD:</h2>
            <div className='display-password'>
                <p>placeholder</p>
            </div>
            <button>NEW PASSWORD</button>
        </div>
    )
}