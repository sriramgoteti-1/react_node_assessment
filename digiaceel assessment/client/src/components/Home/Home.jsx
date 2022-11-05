import React from 'react'
import "./home.css"
export default function Home() {
  return (
    <div className="home">
      <div>
        <button className="adminButton">Admin- create a quiz</button>
      </div>
      <div>
        <button className="userButton">User- take a quiz</button>
      </div>

    </div>
  )
}
