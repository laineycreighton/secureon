//----- IMPORTS -----//
import React, { useState } from 'react';

//CSS
import '../assets/css/Prompts.css';

//----- EXPORTS -----//
export default function Prompts() {

    //State Defaults
    const [pwLength, setPwLength] = useState(8);
    const [includeNumbers, setIncludeNumbers] = useState(false);
    const [includeUpper, setIncludeUpper] = useState(false);
    const [includeLower, setIncludeLower] = useState(false);
    const [includeSpecial, setIncludeSpecial] = useState(false);
    const [password, setPassword] = useState("");

    //Criteria Options
    const typeNumber = "0123456789";
    const typeUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const typeLower = "abcdefghijklmnopqrstuvwxyz";
    const typeSpecial = "!@#$%^&*()-_+=<>?:;~";

    //Generate Password Function
    const handleGeneratePassword = () => {
        if (
            !includeNumbers &&
            !includeUpper &&
            !includeLower &&
            !includeSpecial
        ) {
            alert("You MUST choose at least one character type!");
            return;
        }

        let charChosen = "";
        if (includeNumbers) charChosen += typeNumber;
        if (includeUpper) charChosen += typeUpper;
        if (includeLower) charChosen += typeLower;
        if (includeSpecial) charChosen += typeSpecial;

        let pwCreate = "";
        for (let i = 0; i < pwLength; i++) {
            const randomIndex = Math.floor(Math.random() * charChosen.length);
            pwCreate += charChosen[randomIndex];
        }

        setPassword(pwCreate); // Set the password state here
    }

    //Return
    return (
        //---------- PROMPTS ----------//
        <div className='prompts-container'>
            <div className='cyber'>
                <div className='display'>
                    <p>{password}</p>
                </div>
            </div>

            <div className='prompts'>
                <h2>PLEASE SELECT THE CRITERIA FOR YOUR PASSWORD:</h2>
                <div className='length'>
                    <input
                        type="number"
                        value={pwLength}
                        onChange={(e) => setPwLength(e.target.value)}
                        min='8'
                        max='128'
                    />
                    <p>Desired password length (8-128)</p>
                </div>
                <div className='upper'>
                    <input
                        type="checkbox"
                        checked={includeUpper}
                        onChange={() => setIncludeUpper(!includeUpper)}
                    />
                    <p>Upper Case Letters: (A-Z)</p>
                </div>
                <div className='lower'>
                    <input
                        type="checkbox"
                        checked={includeLower}
                        onChange={() => setIncludeLower(!includeLower)}
                    />
                    <p>Lower Case Letters: (a-z)</p>
                </div>
                <div className='number'>
                    <input
                        type="checkbox"
                        checked={includeNumbers}
                        onChange={() => setIncludeNumbers(!includeNumbers)}
                    />
                    <p>Numbers: (0-9)</p>
                </div>
                <div className='special'>
                    <input
                        type="checkbox"
                        checked={includeSpecial}
                        onChange={() => setIncludeSpecial(!includeSpecial)}
                    />
                    <p>Special Characters: (!@#$%^&*)</p>
                </div>
                <button onClick={handleGeneratePassword} className='generate'>GENERATE PASSWORD</button>

            </div>
        </div >
    )
}