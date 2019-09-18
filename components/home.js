import React from 'react'
import './home.scss'
import GetFeed from './post/get-feed';
import CreateDraft from './post/create-draft';

const Home = () => {
  return (
    <div className='home-component'>
      <div className='get-feed'>
        <GetFeed />
      </div>
      <div className='create-draft'>
        <CreateDraft />
      </div>
    </div>
  )
}

export default Home


