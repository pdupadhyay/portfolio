import './Header.css';
import ProfilePhoto from './Photo.jpeg';

function Header() {
    return (
      <div className='Header'>
        <img src={ProfilePhoto} alt="Profile pic" className='ProfilePic'></img>
        <div>
            <h2><a href='' className='header-name'>Pradyumna Upadhyay</a></h2>
        </div>
      </div>
    );
  }
  
  export default Header;