import { Player } from "./Components/SelectedTeam/SelectedTeam";
import { Team } from './Components/AllTeams/AllTeams'


export const getPlayers = (): Promise<{ data: Player[] }> => {
    return fetch('https://free-nba.p.rapidapi.com/players?page=0&per_page=100', {
      method: 'GET',
	    headers: {
            'X-RapidAPI-Key': 'bde1a9eea9mshf9e8a3f4895622ep165a4djsn96d27920d461',
            'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
        }
    })
      .then(response => {
        return response.json()
      })
  }

  export const getTeams= (): Promise <{data: Team[] }> => {
    return fetch('https://free-nba.p.rapidapi.com/teams', {
      method: 'GET',
	    headers: {
            'X-RapidAPI-Key': 'bde1a9eea9mshf9e8a3f4895622ep165a4djsn96d27920d461',
            'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
        }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error ('Team not found.')
        }
        return response.json()
      })
  }