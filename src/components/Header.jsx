//----- IMPORTS -----//
import { Link } from 'react-router-dom';

//CSS
import '../assets/css/Footer.css';

//Images
import github from '../assets/images/github.svg';
import linkedin from '../assets/images/linkedin.svg';
import email from '../assets/images/email.svg';

//----- EXPORTS -----//
export default function Footer() {

    const mygithub = 'https://github.com/laineycreighton';
    const mylinkedin = 'https://www.linkedin.com/in/lainey-creighton/';
    const myemail = 'dev.lainey@gmail.com';

    //Return
    return (
        //---------- FOOTER ----------//
        <div className='footer-container'>
            <footer>
                <div>
                    <p className='tag'>MADE WITH <span className='passion'>Passion</span> BY <Link className='my-name' to="/dev">LAINEY CREIGHTON</Link></p>
                </div>
                <div className='separator'></div>
                <div className='contact-icons'>
                    <a href={mygithub} target='_blank' ><img src={github} alt='github' /></a>
                    <a href={mylinkedin} target='_blank' ><img src={linkedin} alt='linkedin' /></a>
                    <a href={myemail} target='_blank' ><img src={email} alt='email' /></a>
                </div>
            </footer>
        </div>
    )
}