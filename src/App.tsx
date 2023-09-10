import { useState, useEffect } from 'react'
import './App.css'
import { getPlayers, getTeams } from './API'
import Header from './Components/Header/Header'

const App = () => {

  const [teams, setTeams] = useState([])
  const [serverError, setServerError] = useState({error: false, message: ''})


  useEffect(() => {
    
    getTeams()
      .then((data: any) => {
        // console.log(data)
        setTeams(data.data)

      })
      .catch((error) => {

      })
  },[])

  return (
    <main>
      <Header />
      <div className='test'>BODY TEST</div>
    </main>
  )
}

export default App;
