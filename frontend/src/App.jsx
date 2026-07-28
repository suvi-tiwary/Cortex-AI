
import React from 'react'
import Home from './pages/Home'
import { useEffect } from 'react'
import fetchCurrentUser from './features/fetchCurrentUser'
import { useDispatch } from 'react-redux'


const App = () => {
  const dispatch = useDispatch()

  useEffect(()=>{
    const getUser = async()=>{
      await fetchCurrentUser(dispatch)
    }
    getUser()
  },[])
  return (
    <Home/>
  )
}

export default App