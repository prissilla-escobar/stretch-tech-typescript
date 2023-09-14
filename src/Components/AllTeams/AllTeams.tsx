import './AllTeams.css'
import TeamCard from '../TeamCard/TeamCard'

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
  filteredTeams: Team[]; // Type assertion here
}

const AllTeams = ({ filteredTeams }: AllTeamsProps) => {
  const teamCards = (filteredTeams ?? []).map((team) => (
    <TeamCard
      key={team.id}
      id={team.id}
      abbreviation={team.abbreviation}
      city={team.city}
      conference={team.conference}
      division={team.division}
      full_name={team.full_name}
      name={team.name}
    />
  ));

  return (
    <div className="teams-cont">
      {teamCards.length > 0 ? teamCards : <p>No teams available</p>}
    </div>
  );
}

export default AllTeams;