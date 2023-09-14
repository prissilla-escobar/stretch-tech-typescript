import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Team } from "../AllTeams/AllTeams";
import { getPlayers } from "../../API";
import { nbaLogos, NBALogoType } from "../../nbaLogos";
import "../../Components/SelectedTeam/SelectedTeam.css";
import back from "../../Assets/back-button.png";
import ErrorComponent from "../Error/Error";
import LoadingComponent from "../Loading/Loading";

export type Player = {
  id: number;
  first_name: string;
  last_name: string;
  position: string;
  team: Team;
};

const SelectedTeam = () => {
  useEffect(() => {
    setLoading(true); // <-- Start loading
    getPlayers()
      .then((data: any) => {
        const filteredPlayers = data.data.filter(
          (player: Player) => player.team.id.toString() === teamId
        );
        setPlayers(filteredPlayers);
        setTimeout(() => {
          setLoading(false);
      }, 1500);
      })
      .catch((error: any) => {
        console.error("Failed to fetch players:", error);
        setError(error.message || "An error occurred while fetching players.");
        setLoading(false); // <-- End loading even if there's an error
      });
  }, [teamId]);

  if (loading) {
    return <LoadingComponent message="Loading players..." />;
  }

  if (error) {
    return <ErrorComponent message={error} resetError={() => setError(null)} />;
  }

  return (
    <div className="background-img">
      <div className="players-logo-cont">
        <div className="roster-list-container">
          <div className="roster-container">
            <h2 className="roster-header">Notable Players:</h2>
            {players.length === 0 ? (
              <p>No notable players.</p>
            ) : (
              <div className="player-list">
                {players.map((player) => (
                  <ul key={player.id} className="player">
                    {player.first_name} {player.last_name}
                  </ul>
                ))}
              </div>
            )}
            <Link to="/">
              <img className="back-button" src={back} alt="back button" />
            </Link>
          </div>
        </div>
        <div className="sel-team-logo">
          <img
            className="sel-team-logo"
            src={`${selectedTeamLogo?.logo}`}
            alt={`${selectedTeamLogo?.fullName} logo`}
          />
        </div>
      </div>
    </div>
  );
};

export default SelectedTeam;
