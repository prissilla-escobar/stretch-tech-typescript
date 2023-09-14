import './Header.css'
import Search from '../Search/Search'
import nbaLogo from '../../Assets/NBA-logo-png.png'
import { Link } from 'react-router-dom'

export type Team = {
  id: number;
  abbreviation: string;
  city: string;
  conference: string;
  division: string;
  full_name: string;
  name: string;
}

type AllTeamsProps = {
  teams: Team[]
}

// console.log('Header teams: ', teams)

const Header = ({ teams }: AllTeamsProps) => {
    return (
        <header>
            <div className="page-name">
                <Link to={'/'}>
                    <h1>ROSTERWATCH</h1>
                </Link>
                <img className="nba-logo" src={nbaLogo} alt="a silouhette of a man running and bouncing a basketball with NBA next to him" />
            </div>
            <Search teams={teams} />
        </header>
    )
}

export default Header