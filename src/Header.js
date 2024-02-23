import './Header.css';

function Header() {
    return (
      <div className='Header'>
        <img src="./Photo.jpeg" alt="Profile" className='ProfilePic'></img>
        <div>
            <h2><a href='' className='header-name'>Pradyumna Upadhyay</a></h2>
        </div>
      </div>
    );
  }
  
  export default Header;