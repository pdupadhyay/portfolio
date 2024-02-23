import './Footer.css';
import { SocialIcon } from 'react-social-icons';

function Header(){
    return (
        <div className='footer'>
            <div className='footer-name'>
                <h2>© Pradyumna Upadhyay</h2>
            </div>
            <div className='social-media'>
                <ul className='social-media-ul'>
                    <li>
                        <SocialIcon bgColor='#000000' network="github" url='https://github.com/pdupadhyay' target='_blank'></SocialIcon>
                    </li>
                    <li>
                        <SocialIcon bgColor='#000000' network='linkedin' url='https://www.linkedin.com/in/pradyumna-upadhyay-4ba5b21aa' target='_blank'></SocialIcon>
                    </li>
                    <li>
                        <SocialIcon bgColor='#000000' network='email' url='mailto:pradhyumanupadhyay@gmail.com' target='_blank'></SocialIcon>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;