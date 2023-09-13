import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Team } from '../AllTeams/AllTeams';
import { getPlayers } from '../../API'
import '../../Components/SelectedTeam/SelectedTeam.css'
import ErrorComponent from '../Error/Error';

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
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        getPlayers()
            .then((data: any) => {
                const filteredPlayers = data.data.filter((player: Player) => player.team.id.toString() === teamId);
                setPlayers(filteredPlayers);
            })
            .catch((error: any) => {
                console.error("Failed to fetch players:", error);
                setError(error.message || "An error occurred while fetching players.");
            });
    }, [teamId]);

    if (error) {
        return <ErrorComponent message={error} resetError={() => setError(null)} />;
    }

    return (
        <div className='background-img'>
            <h2 className='roster-container'>Notable Players</h2>
            <ul className='roster-list'>
                {players.map(player => (
                    <li key={player.id} className='player'>
                        {player.first_name} {player.last_name} - {player.position}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SelectedTeam;
