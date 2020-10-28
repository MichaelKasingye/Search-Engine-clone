import React,{useState} from 'react'
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import '../style/Search.css';
import { Button } from '@material-ui/core';
import {useHistory} from "react-router-dom";
import { useStateValue } from '../ContextAPI/StateProvider';
import {actionTypes} from "../ContextAPI/reducer";

function Search({ hideButtons = false }) {
    const [{}, dispatch] = useStateValue()
    const [input, setInput] = useState("");
    const history =useHistory();

    function search(e){
        e.preventDefault();
        console.log('you hit seach', input);

        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })
        history.push('/search')
    }

    return (
        <form className="search">
             <div className="search_input">
                <SearchIcon className="search_inputIcon"/>
                 <input value={input} onChange={e => setInput(e.currentTarget.value)}/>
                 <MicIcon/>
             </div>

             {!hideButtons ?(
                 <div className="search_buttons">
                 <Button type='submit' onClick={search} variant="outlined">Noonya Search</Button>
                 <Button variant="outlined"> <a href="https://github.com/MichaelKasingye/Search-Engine-clone">Git Hub Repo</a> </Button>
             </div>
             ):(
                <div className="search_buttonsHidden">
                <Button type='submit' onClick={search} variant="outlined">Google Search</Button>
                <Button className="search_buttonsHidden" variant="outlined">I'm Feeling Lucky</Button>
            </div>
             )}   

             
        </form>
    )
}

export default Search
