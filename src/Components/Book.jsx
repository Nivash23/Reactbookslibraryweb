import React from 'react'
import { Link } from 'react-router-dom'

function Book({title,src,author,category}) {
  return (
    <div>

      <Link to={`/bookdetails/${title}`} style={{textDecoration:"none",color:"black"}}>
      <div id="bookcontainer">
          <img src={src } alt='Book' />
          <div style={{fontWeight:"bold"}}>Title :{title }</div>
          <div style={{ fontWeight: "bold" }}>Author :{author}</div>
          <div>Topic :{category }</div>

    </div>
      
      </Link>
      
    </div>
  )
}

export default Book