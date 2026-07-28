
import React from 'react'
import Home from './pages/Home'
import { useEffect } from 'react'
import fetchCurrentUser from './features/fetchCurrentUser'
import { getConversations } from './features/getConversations'
import { useDispatch } from 'react-redux'


const App = () => {
  const dispatch = useDispatch()

  useEffect(()=>{
    const getUser = async()=>{
      await fetchCurrentUser(dispatch)
    }
    getUser()
  },[])

  useEffect(()=>{
    const conversations = async()=>{
      await getConversations(dispatch)
    }
    conversations()
  },[])
  return (
    <Home/>
  )
}

export default App