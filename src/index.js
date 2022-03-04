import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import AddParty from './AddParty'
import PayReceive from './PayReceive'
import PartyList from './PartyList'
import SearchParty from './SearchParty'
import './index.css'

function Root(){

  return(
    <>
      <Header />
      <PayReceive />
      <AddParty />
      <SearchParty />
      <PartyList />
    </>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'))
