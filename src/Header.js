import './Header.css';

function Header() {
    return (
      <div className='Header'>
        <img src="../public/Photo.jpeg" alt="Profile pic" className='ProfilePic'></img>
        <div>
            <h2><a href='' className='header-name'>Pradyumna Upadhyay</a></h2>
        </div>
      </div>
    );
  }
  
  export default Header;