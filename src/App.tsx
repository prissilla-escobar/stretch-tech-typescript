import { useState, useEffect } from 'react'
import './App.css'
import { getTeams } from './API'
import Header from './Components/Header/Header'
import AllTeams from './Components/AllTeams/AllTeams'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SelectedTeam from './Components/SelectedTeam/SelectedTeam'
import ErrorComponent from './Components/Error/Error'
import Search from './Components/Search/Search'

const App = () => {
  const [teams, setTeams] = useState([])
  const [serverError, setServerError] = useState({hasError: false, message: ''})

console.log('App teams: ', teams)

  useEffect(() => {
    getTeams()
      .then((data: any) => {
        console.log('data.data: ', data.data)
        setTeams(data.data)
      })
      .catch((error: any) => {
        setServerError({hasError: true, message: `${error.message}`})
      })
}, [])
  
  const resetError = () => {
    setServerError({hasError: false, message: ''})
  }

  return (
    <Router>
      <main>
        <Header teams={teams}/>
        {serverError.hasError ? (
          <ErrorComponent 
            message={serverError.message} 
            resetError={resetError}
          />
        ) : (
        <Routes> 
          <Route path="/" element={<AllTeams teams={teams}/>} />
          <Route path="/team/:teamId" element={<SelectedTeam />} />
          <Route path="*" element={<ErrorComponent message={{message: "The page you're looking for doesn't exist."}} resetError={resetError} />} />
        </Routes>
        )}
      </main>
    </Router>
  )
}

export default App
