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
            <h2>PLEASE SELECT THE CRITERIA FOR YOUR PASSWORD:</h2>
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
            <button className='generate'>GENERATE PASSWORD</button>
        </div >
    )
}