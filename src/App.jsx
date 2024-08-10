import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'

const SideBar = () => {
  return (
    <div>
      <div className='sidebar border'>
        <div className='sidebar-header'>
          <img src={reactLogo} alt='React Logo' />
          <h1>React</h1>
        </div>
        <div className='sidebar-content'>
          <ul>
            <li>
              <a href='#'>Home</a>
            </li>
            <li>
              <a href='#'>About</a>
            </li>
            <li>
              <a href='#'>Services</a>
            </li>
            <li>
              <a href='#'>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

const MainBody = () => {
  return (
    <div className='main-body border'>
      <h1>Main Body</h1>
    </div>
  )
}

const MyCard = () => {
  return (
    <div className='my-card border'>
      <h1>My Card</h1>
    </div>
  )
}

const Transaction = () => {
  return (
    <div className='transaction border'>
      <h1>Transaction</h1>
    </div>
  )
}

const RightSideBar = () => {
  return (
    <div>
      <MyCard />
      <Transaction />
    </div>
  )

}

function App() {
  return (
    <div className='grid gap-4'>
      <Header />
      <div className='grid grid-cols-12 gap-4'>
        <div className='col-span-2'>
          <SideBar />
        </div>
        <div className='col-span-6'>
          <MainBody />
        </div>
        <div className='col-span-4'>
          <RightSideBar />
        </div>
      </div>
    </div >
  )
}

export default App
