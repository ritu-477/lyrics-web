import React from 'react'
import Hero from '../Hero'
import Songs from '../Songs'
import AlphabetsTable from '../AlphabetsTable'
import Footer from '../Footer'

const Home = () => {
  return (
      <>
          <Hero />
          <Songs/>
          <AlphabetsTable />
          <Footer/>
      </>
  )
}

export default Home