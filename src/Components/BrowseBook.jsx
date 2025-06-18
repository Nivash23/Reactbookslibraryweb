import React, { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom';
import Book from './Book';
import { useSelector } from 'react-redux';

function BrowseBook() {
  const [searchItem, setSearchItem] = useState('');
  // const { bookslist, setBookslist } = useOutletContext();
  const bookslist=useSelector((state)=>state.bookslists.lists)

  const [searcheditems, setSearcheditems] = useState([]);

  const searchhandler = () => {
    let searched = bookslist.filter(book=>
      book.title.toLowerCase().includes(searchItem.toLowerCase())
    

    )
    setSearcheditems(searched);
    console.log(searched)
    
  }

  // const consolehandler = () => {
  //   searcheditems.map((val) => {
  //     console.log(val.title)
  //   })
  // }
  useEffect(() => {
    setSearcheditems(bookslist);
  },[])
  
 

  
  return (
    <div id="wholebrowse" >

    <div id="browsecontainer">

    <div>
          <h3 style={{ fontSize: "2rem", margin: "20px 0px 30px 70px " }}>BrowseBook</h3>
      <div id="searchbar">
          <div >
            <input type="text" placeholder='Search The Books..' value={searchItem} onChange={(e)=>{setSearchItem(e.target.value)}} />
            
          </div>
          <div>

              <button type="button" onClick={() => {
                if (searchItem !== "")
                {
                  searchhandler();

                }
               }}>Search</button>
          </div>
        </div>
        
        
        </div>
      
      
      </div>
      <div id="alllistcontainer">
        <div id="title">Books Lists</div>
        <div id="Alllists">
          {
            searcheditems.map((book) => (
              <Book  title={book.title} src={book.thumbnailUrl} author={book.authors} category={book.categories[0]}/>
              
            ))
          }
        </div>
      </div>
      
  </div>
  )
}

export default BrowseBook