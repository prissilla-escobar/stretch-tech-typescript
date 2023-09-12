import './TeamCard.css'
import { nbaLogos, NBALogoType } from '../../nbaLogos'

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
    <div className="team-card">
      <img className="team-logo" src={`${individualLogo?.logo}`} alt={`${full_name} logo`} />
      <div className="team-name">
        <h3>{city} {name}</h3>
      </div>
    </div>
  )
}

export default TeamCard