import React from 'react'
import Navbar from './navbar/Navbar'
import Nav from './navbar/nav'
import Navpage from './navbar/Navpage'

const Mainpage = () => {
  return (
    <React.Fragment>
      <section className='scroll-smooth'>
        <div className='h-[110px] w-full'>
          <Navbar />
        </div>
        <div className='container m-auto'>
          <Navpage />
        </div>
      </section>
    </React.Fragment>
  )
}

export default Mainpage