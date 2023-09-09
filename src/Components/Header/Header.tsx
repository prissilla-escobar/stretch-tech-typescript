import './Header.css'
import Search from '../Search/Search'
import nbaLogo from '../../Assets/NBA-logo-png.png'


const Header: React.FC = () => {
    return (
        <header>
            <div className="page-name">
                <h1>ROSTERWATCH</h1>
                <img className="nba-logo" src={nbaLogo} alt="a silouhette of a man running and bouncing a basketball with NBA next to him" />
            </div>
            <Search />
        </header>
    )
}

export default Header