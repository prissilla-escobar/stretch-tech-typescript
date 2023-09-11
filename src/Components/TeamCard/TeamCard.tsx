import './TeamCard.css'

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
    <div className="team-card">
      {/* <h3>I'm a card</h3> */}
      <h3>{city}</h3>
      <h3>{name}</h3>
    </div>
  )
}

export default TeamCard