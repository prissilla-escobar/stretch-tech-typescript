import './Header.css'
import Search from '../Search/Search'
import nbaLogo from '../../Assets/NBA-logo-png.png'
import { Link } from 'react-router-dom'


type HeaderProps = {
    setSearchTerm: (term: string) => void;
  };

const Header = ( { setSearchTerm }: HeaderProps) => {
    return (
        <header>
            <div className="page-name">
                <Link to={'/'}>
                    <h1>ROSTERWATCH</h1>
                </Link>
                <img className="nba-logo" src={nbaLogo} alt="a silouhette of a man running and bouncing a basketball with NBA next to him" />
            </div>
            <Search setSearchTerm={setSearchTerm} />
        </header>
    )
}

export default Header