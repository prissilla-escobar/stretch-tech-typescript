import { useState, useEffect } from 'react'
import './App.css'
import { getTeams } from './API'
import Header from './Components/Header/Header'
import AllTeams from './Components/AllTeams/AllTeams'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SelectedTeam from './Components/SelectedTeam/SelectedTeam'



const App = () => {

  const [teams, setTeams] = useState([])
  const [players, setPlayers] = useState([])
  const [serverError, setServerError] = useState({hasError: false, message: ''})

  useEffect(() => {
    getTeams()
      .then((data: any) => {
        setTeams(data.data);
        setPlayers(data.data)

      })
      // we don't want to use :any here, how to fix?
      .catch((error: any) => {
        setServerError({hasError: true, message: `${error.message}`})
      })
  },[])

  return (
    <Router>
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<AllTeams teams={teams} />} />
          <Route path="/team/:teamId" element={<SelectedTeam />} />
        </Routes>
      </main>
    </Router>
  );
  }
  

export default App;