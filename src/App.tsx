import { useState, useEffect } from 'react'
import './App.css'
import { getPlayers, getTeams } from './API'
import Header from './Components/Header/Header'
import AllTeams from './Components/AllTeams/AllTeams'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SelectedTeam from './Components/SelectedTeam/SelectedTeam'
import ErrorComponent from './Components/Error/Error'

const App = () => {
  const [teams, setTeams] = useState([])
  const [players, setPlayers] = useState([])
  const [serverError, setServerError] = useState({hasError: false, message: ''})

  useEffect(() => {
    getTeams()
      .then((data: any) => {
        setTeams(data.data);
      })
      .catch((error: any) => {
        setServerError({hasError: true, message: `${error.message}`});
      });

    getPlayers()
      .then((data: any) => {
        setPlayers(data.data);
      })
      .catch((error: any) => {
        // This could overwrite an error set by getTeams if they both fail.
        setServerError({hasError: true, message: `${error.message}`});
      });

}, []);



  const resetError = () => {
    setServerError({hasError: false, message: ''});
  }

  return (
    <Router>
      <main>
        <Header />

        {serverError.hasError ? (
          <ErrorComponent 
            message={serverError.message} 
            resetError={resetError}
          />
        ) : (
        <Routes> 
          <Route path="/" element={<AllTeams teams={teams} />} />
          <Route path="/team/:teamId" element={<SelectedTeam />} />
          <Route path="*" element={<ErrorComponent message={{message: "The page you're looking for doesn't exist."}} resetError={resetError} />} />
        </Routes>
        )}

      </main>
    </Router>
  );
}

export default App;
