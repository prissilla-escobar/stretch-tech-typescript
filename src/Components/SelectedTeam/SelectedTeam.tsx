import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Team } from '../AllTeams/AllTeams';
import { getPlayers } from '../../API'
import { nbaLogos, NBALogoType } from '../../nbaLogos'
import '../../Components/SelectedTeam/SelectedTeam.css'
import back from '../../Assets/back-button.png'

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

    useEffect(() => {
      getPlayers()
        .then((data: any) => {
          const filteredPlayers = data.data.filter((player: Player) => player.team.id.toString() === teamId);
          setPlayers(filteredPlayers);
        })
        .catch((error: any) => {
          console.error("Failed to fetch players:", error);
        });
    }, [teamId]);
    
    const selectedTeamLogo: NBALogoType | undefined  = nbaLogos.find((team) => {
      if (team.id === teamId) {
        return team
      }
    })

    return (

      <div className= 'background-img'>
        <div className="players-logo-cont">
          <div className='roster-list-container'>
              <h2 className='roster-container'>Notable Players:</h2>
              {players.length === 0 ? (
                <p>No notable players.</p>
              ) : (
              <div>
                {players.map(player => (
                  <ul key={player.id} className='player'>
                    {player.first_name} {player.last_name}
                  </ul>
                ))}
              </div>
              )}
              <Link to="/" >
                  <img className="back-button" src={back} alt="back button" />
              </Link>
          </div>
          <div className='sel-team-logo'>
             <img className="sel-team-logo" src={`${selectedTeamLogo?.logo}`} alt={`${selectedTeamLogo?.fullName} logo`} />
          </div>
        </div>
      </div>

    )
  }

export default SelectedTeam;
