import React, { useState } from 'react';
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
  teams: Team[]
  searchTerm: string;
}

const AllTeams = ({ teams, searchTerm }: AllTeamsProps) => {
  const filteredTeams = teams.filter(team => {
    return team.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
           team.city.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const teamCards = filteredTeams.map((team) => {
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

  return (
    <div className="teams-cont">{teamCards}</div>
  )
}

export default AllTeams;