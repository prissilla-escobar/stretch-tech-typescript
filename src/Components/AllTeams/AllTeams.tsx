import './AllTeams.css'

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

  const firstTeam = teams[0]

  console.log('teams[0]: ', teams[0])
  return (
    <>
      
      <h1 className='allTeams-cont'>Teams</h1>
      <h2>{firstTeam.city}</h2>
    </>
  )
}



export default AllTeams