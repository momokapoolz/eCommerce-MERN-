import logo from './logo.svg';
import './App.css';

import { Outlet } from 'react-router-dom'
import { useEffect } from 'react';

import Header from './components/Header'
import Footer from './components/Footer'

import summaryAPI from './common/api';

import {useDispatch} from 'react-redux'
import { setUserDetails } from './store/userSlice';


function App() {

  const dispatch = useDispatch()

  const fetchUserDetails = async() => {
    const dataRespone = await fetch(summaryAPI.Current_User.url, {
      method: summaryAPI.Current_User.method,
      credentials: 'include',
    })

    const dataApi = await dataRespone.json()

    if(dataApi.success){
      dispatch(setUserDetails(dataApi.data))
    }

    console.log("data-user", dataApi)
  }


  useEffect( () =>{
    //user detail
    fetchUserDetails()

  }, [])

  return (
    <>
      <Header />
      <main className='min-h-[calc(100vh-120px)]'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
