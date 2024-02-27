import React from 'react'
import Header from '../../components/blocks/Header'
import Footer from '../../components/blocks/Footer'
import Logosection from './components/blocks/Logosection'
import Typesection from './components/blocks/Typesection'
import Favoritesection from './components/blocks/Favoritesection'

function HomePage() {
  return (
    <div>
      <Header/>
      <Logosection/>
      <Typesection/>
      <Favoritesection/>
      <Footer/>
    </div>
  )
}

export default HomePage