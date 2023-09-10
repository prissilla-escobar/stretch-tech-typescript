import './AllTeams.css'
import TeamCard from '../TeamCard/TeamCard'

type Team = {
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
const AllTeams = ({ teams }: AllTeamsProps) => {
  console.log('teams: ', teams)
  const teamCards = teams.map((team) => {
    return(
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
    )

  })
  const firstTeam = teams[0]

  console.log('teams[0]: ', teams[0])
  return (
    <>
      
      {/* <h1 className='allTeams-cont'>Teams</h1>
      <h2>{firstTeam.city}</h2> */}
      <div className="teams-cont">{teamCards}</div>
    </>
  )

}



export default AllTeams