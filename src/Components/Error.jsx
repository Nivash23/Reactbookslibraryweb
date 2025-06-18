import React from 'react'
import { useNavigate } from 'react-router-dom'

function Error() {
  const navigate = useNavigate();
  return (
    <div style={{textAlign:"center"}}>
      <h2 style={{margin:"20px 0px 20px 0px"}}>Page NOT Found</h2>
      <button type="button" onClick={()=>{navigate('/')}} style={{padding:"10px 15px 15px 10px",borderRadius:"7px",backgroundColor:"blue",color:"white",cursor:"pointer"}}>Go Back To Home</button>
    </div>
  )
}

export default Error