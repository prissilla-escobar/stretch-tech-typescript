import './TeamCard.css'
import { nbaLogos, NBALogoType } from '../../nbaLogos'
import { Link } from 'react-router-dom'

type TeamCardProps = {
  id: number;
  abbreviation: string;
  city: string;
  conference: string;
  division: string;
  full_name: string;
  name: string;
}

const TeamCard = ({id, abbreviation, city, conference, division, full_name, name}: TeamCardProps) => {

  const individualLogo: NBALogoType | undefined  = nbaLogos.find((team) => {
    if (team.fullName === full_name) {
      return team
    }
  })

  return (
   <Link to={`/team/${id}`}>      
    <div className="team-card">
      <img className="team-logo" src={`${individualLogo?.logo}`} alt={`${full_name} logo`} />
      <div className="team-name">
        <h2>{city} {name}</h2>
      </div>
    </div>
   </Link>   
  )
}

export default TeamCard