import { useState, useEffect } from 'react'
import AllTeams from '../AllTeams/AllTeams'
import './Search.css'
import dunkLogo from '../../Assets/Jumpman_logo.svg.png'

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
  teams: Team[]
}

const initialFilteredTeams: Team[] = [];

const Search = ({ teams }: AllTeamsProps) => {
  const [filteredTeams, setFilteredTeams] = useState(initialFilteredTeams)

  const [searchField, setSearchField] = useState('')

  console.log('Searchteams: ', teams)
// let filteredTeams = teams

// searchField === '' ?  filteredTeams = teams : 

const createFilteredTeams = () => {
  let unfilteredTeams = [...teams]

  const subsetTeams = unfilteredTeams.filter(team => {
    console.log('subset team: ', team)
    return (
      
      team.city.toLowerCase().includes(searchField.toLowerCase()) ||
      team.name.toLowerCase().includes(searchField.toLowerCase())
      
    )
  })
  setFilteredTeams(subsetTeams)
}



useEffect(() => {
  createFilteredTeams()
}, [searchField])

  // const searchList = () => {
  //   return (
  //     <AllTeams filteredTeams={filteredTeams} />
  //   )
  // }

  const searchHandler =(e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchField(value)
  }


    return (
        <div className="search-area">
            <form>
                <input type='search' id="searchInput" name="q" placeholder='Search Team Name & Dunk >'
                value={searchField}
                onChange={event => searchHandler(event)} />
            </form>
            <img className="dunk-logo" src={dunkLogo} alt="a black silouhette of a man dunking a basketball" />
            <AllTeams filteredTeams={filteredTeams} />
        </div>
    )
}

export default Search