import { useState, useEffect } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Registration from './pages/Registration'
import Habits from './pages/Habits'
import Tracker from './pages/Tracker'
import Today from './pages/Today'
import { UserContext } from './constants/usercontext'

function App() {
  const [completedHabits, setCompletedHabits] = useState(0);
  const [habitsCount, setHabitsCount] = useState(0);
  const storedUser = JSON.parse(localStorage.getItem('user'));
  const [completedHabitsCount, setCompletedHabitsCount] = useState(0);
  const [userInfo, setUserInfo] = useState(storedUser || '');

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(userInfo));
  }, [userInfo]);

  return (
    <UserContext.Provider value={{userInfo, setUserInfo, completedHabits, setCompletedHabits, habitsCount, setHabitsCount, completedHabitsCount, setCompletedHabitsCount}}>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/cadastro' element={<Registration />} />
        <Route path='/habitos' element={<Habits />} />
        <Route path='/historico' element={<Tracker />} />
        <Route path='/hoje' element={<Today />} />
      </Routes>
    </UserContext.Provider>
  )
}

export default App
