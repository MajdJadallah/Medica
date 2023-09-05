import React from 'react'
import Header from '../components/Header';
import Jumpotron from '../components/Jumpotron';
import Cards from '../components/Cards'
import Aside from '../components/Aside';
import './style/Home.css'
import AsideLeft from '../components/AsideLeft';
function Home() {
  return (
    <div>
      <div className='container'>
        <div className='row'>
            <div className='col-3'>
                <AsideLeft/>
            </div>
            <div className='col-9' id='main-content'>
                <Header/>
                <Jumpotron/>
                <Cards/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home
