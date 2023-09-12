import './TeamCard.css'
import { Link } from 'react-router-dom';

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
  return (
    <Link to={`/team/${id}`}>
      <div className="team-card">
        <h3>{city}</h3>
        <h3>{name}</h3>
      </div>
    </Link>
  );
  
}

export default TeamCard