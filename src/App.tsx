import { useState, useEffect } from 'react'
import './App.css'
import { getPlayers, getTeams } from './API'
import Header from './Components/Header/Header'
import AllTeams from './Components/AllTeams/AllTeams'


const App = () => {

  const [teams, setTeams] = useState([])
  const [serverError, setServerError] = useState({hasError: false, message: ''})

  useEffect(() => {
    getTeams()
      .then((data: any) => {
        setTeams(data.data)

      })
      // we don't want to use :any here, how to fix?
      .catch((error: any) => {
        setServerError({hasError: true, message: `${error.message}`})
      })
  },[])

  return (
    <main>
      <Header />
      <AllTeams teams={teams} />
    </main>
  )
}

export default App;