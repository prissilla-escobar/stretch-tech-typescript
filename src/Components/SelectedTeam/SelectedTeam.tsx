import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Team } from '../AllTeams/AllTeams';
import { getPlayers } from '../../API'
import { nbaLogos, NBALogoType } from '../../nbaLogos'
import '../../Components/SelectedTeam/SelectedTeam.css'

export type Player = {
    id: number;
    first_name: string;
    last_name: string;
    position: string;
    team: Team;
  };
  
  const SelectedTeam = () => {
    const { teamId } = useParams<{ teamId: string }>();
    const [players, setPlayers] = useState<Player[]>([]);
    console.log('teamId: ', teamId)
    console.log('players: ', players)
    useEffect(() => {
      getPlayers()
        .then((data: any) => {
            console.log("Player Data:", data.data)
          const filteredPlayers = data.data.filter((player: Player) => player.team.id.toString() === teamId);
          setPlayers(filteredPlayers);
        })
        .catch((error: any) => {
          console.error("Failed to fetch players:", error);
        });
    }, [teamId]);
    
    const selectedTeamLogo: NBALogoType | undefined  = nbaLogos.find((team) => {
      if (team.id === teamId) {
        console.log('find team: ', team)
        return team
      }
    })

    return (
      <div className= 'background-img'>
        <h2 className='roster-container'>Notable Players</h2>
        <div className="players-logo-cont">

          <ul className='roster-list'>
          {players.map(player => (
            <li key={player.id} className='player'>
              {player.first_name} {player.last_name} - {player.position}
            </li>
          ))}
          </ul>
          <div className='sel-team-logo'>
            <img className="sel-team-logo" src={`${selectedTeamLogo?.logo}`} alt={`${selectedTeamLogo?.fullName} logo`} />
          </div>
        </div>
      </div>
    );
  }
  // not sure of the code on line 53: what is the ? for

export default SelectedTeam;
