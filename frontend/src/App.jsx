
import React from 'react'
import Home from './pages/Home'
import { useEffect } from 'react'
import fetchCurrentUser from './features/fetchCurrentUser'
import { useDispatch } from 'react-redux'
import { getConversations } from './features/getConversations'


const App = () => {
  const dispatch = useDispatch()

  useEffect(()=>{
    const getUser = async()=>{
      await fetchCurrentUser(dispatch())
    }
    getUser()
  },[])

  useEffect(()=>{
    const conversations = async()=>{
      await getConversations(dispatch())
    }
    getUser()
  },[])
  return (
    <Home/>
  )
}

export default App