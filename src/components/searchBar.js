import React, {Component} from 'react'
import '../styles/searchBar.css'

class SearchBar extends Component {
    render() {
        return (
            //element HTML masuk di sini
            <div>
                <input type='text' placeholder='Search book here...' className='search' />
            </div>
        )
    }
}

export default SearchBar