import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CardList from './components/CardList'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <div className='container'>
    <Navbar />
    <Hero />
    <CardList />
  </div>
)