import React from 'react'
import ListComponent from '../../ReusableComponents/ListComponent'
import MusicComponent from '../MusicComponent'

const ProfileComponent = () => {
  return (
    <div className='flex flex-col space-y-2 justify-center items-center'>
        <div>ProfileComponent</div>
        <div>
          <h1>Prathmesh Shendarkar</h1>
          <ul>
            <li>I am a backend developer</li>
            <li>I can code in NodeJS, Javascript and React</li>
            <li>Lets Connect and contribute.</li>
          </ul>
        </div>
      </div>
  )
}

export default ProfileComponent