import '../styles/header.css'
const Header = () => {
    return ( 
        <div className="header">
            <div>
                <span>Abstract</span>
                <span>Help Center</span>
                
             </div>
             <div>
                <button>Submit a request</button>
                <button>Sign In</button>
             </div>
        </div>
     ) ;
}

export default Header;  