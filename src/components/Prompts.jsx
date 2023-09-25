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
            <div className='prompts'>
                <header>
                    <h2>YOUR CRITERIA</h2>
                    <p>PLEASE SELECT THE CRITERIA FOR YOUR PASSWORD:</p>
                </header>
                <div className='inputs'>
                    <div className='length'>
                        <input type="text" />
                        <p>Desired password length (8-128)</p>
                    </div>
                    <div className='upper'>
                        <input type="checkbox" />
                        <p>Upper Case Letters: (A-Z)</p>
                    </div>
                    <div className='lower'>
                        <input type="checkbox" />
                        <p>Lower Case Letters: (a-z)</p>
                    </div>
                    <div className='number'>
                        <input type="checkbox" />
                        <p>Numbers: (0-9)</p>
                    </div>
                    <div className='special'>
                        <input type="checkbox" />
                        <p>Special Characters: (!@#$%^&*)</p>
                    </div>
                </div>
                <button>CREATE</button>
            </div>
        </div >
    )
}