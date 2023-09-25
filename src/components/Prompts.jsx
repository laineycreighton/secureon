//----- IMPORTS -----//
import { Link } from 'react-router-dom';

//CSS
import '../assets/css/Prompts.css';

//----- EXPORTS -----//
export default function Prompts() {

    //Return
    return (
        //---------- PROMPTS ----------//
        <div className='prompts-container'>
            <header>
                <h2>YOUR CRITERIA</h2>
                <p>PLEASE SELECT THE CRITERIA FOR YOUR PASSWORD:</p>
            </header>
            <div>
                <div>
                    <input type="text" />
                    <p>Desired password length</p>
                </div>
                <div>
                    <input type="checkbox" />
                    <p>Upper Case Letters: (A-Z)</p>
                </div>
                <div>
                    <input type="checkbox" />
                    <p>Lower Case Letters: (a-z)</p>
                </div>
                <div>
                    <input type="checkbox" />
                    <p>Numbers: (0-9)</p>
                </div>
                <div>
                    <input type="checkbox" />
                    <p>Special Characters: (!@#$%^&*)</p>
                </div>
            </div>
            <button>CREATE</button>
        </div>
    )
}