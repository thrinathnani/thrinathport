import React from 'react'
import './Nanii.css'
import nani_img from '/src/nani.jpeg'

const Nanii = () => {
  return (
    <div className='Nanii'>
    <img src={nani_img} alt = "" />
    <h2>Hello</h2>
    <h1><span>I'm A R K Thrinath </span></h1>
    <p>an aspiring software developer and engineering student </p>
    </div>
  )
}

export default Nanii