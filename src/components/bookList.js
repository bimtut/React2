import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import '../styles/bookList.css'
import Data from './dataDummy'

class BookList extends Component{

  render(){
    return(
      <div>
        <div class="flex-container">
          {Data.map(e => {
            return (
            <Link to={`/${e.bookid}`}>
              <div class='div2'>
                <p>
                  <img class='img' src={e.image_url} alt="telo"></img>
                  {e.title}
                </p>
              </div>
            </Link> 
            )
          })}
        </div>
      </div>
    );
  }
}

export default BookList;
