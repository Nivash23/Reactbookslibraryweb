import React, { useEffect, useState } from 'react'
import { useParams,useOutletContext } from 'react-router-dom'

function Bookdetails() {
  const { bookslist, setBookslist } = useOutletContext();
  const [book, setBook] = useState([]);
  const bookdetail = useParams();
  
  useEffect(() => {
    let bookarr = bookslist.filter((book) => book.title == bookdetail.title);
    setBook(bookarr)
    
    // console.log(book)
  },[])


  

  
  return (
    <div>
      {
        book.map((val) => (
          <div id="bookdetailscontainer">
            <img src={val.thumbnailUrl}></img>
            <div id="title">Title : {val.title}.</div><br/>
            <div>Author : {val.authors}.</div><br/>
            <div>
              <h2>ShortDescription :</h2>

            <div>{val.shortDescription}</div>
            </div>
            <br/>
            <div>
              
            <div>Page count : {val.pageCount }</div>
            </div>
            
          </div>
        ))
     }

    </div>
  )
}

export default Bookdetails