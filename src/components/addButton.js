import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Modal from 'react-modal'
import '../styles/addButton.css'

class Add extends Component {
    render() {
        return (
            //element HTML masuk di sini
            <div>
                {/* <button className='add'>ADD</button> */}
                <div>
                    <a href="#popupForm"><button class="addButton">Add</button></a>
                    {/*href pada tag a fungsinya untuk mengarahkan kemana setelah diklik */}
                </div>

                <div id="popupForm" class="overlay">
                    
                    <div class="popup">
                        <h2>Add Data</h2>
                        {/* bikin tanda close di pojokan popup */}
                        <a class="close" href="#">&times;</a> 
                        <div class="content">
                            <form>
                                <div>
                                    <label>Url Image</label>
                                    <input placeholder='Url image..'></input>
                                </div>
                                <div>
                                    <label>Title</label>
                                    <input placeholder='Title..'></input>
                                </div>
                                <div>
                                    <label>Descriptiion</label>
                                    <input placeholder='Description..'></input>
                                </div>
                            </form>
                            <div>
                                <a href="#addButton"><button class="saveButton">Save</button></a>
                                {/* save button ini nanti dibuat bisa ngesave beneran*/}
                            </div>
                        </div>
                   </div>
                </div>
            </div>
        )
    }
}

export default Add