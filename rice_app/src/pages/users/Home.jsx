import React from 'react'
import HomeScrollbar from './HomeScrollbar'
import HomeCardScroll from './HomeCardScroll'
import About from './About'

const Home = () => {
  return (
    <div>
      <HomeScrollbar/>
      <HomeCardScroll/>
      <About/>
    </div>
  )
}

export default Home
