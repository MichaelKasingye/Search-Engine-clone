import React from 'react'
import useGoogleSearch from '../API_KEYS/useGoogleSearch';
import { useStateValue } from '../ContextAPI/StateProvider';
import {Link} from "react-router-dom";
import Res from "../respose/response";
import "../style/SearchPage.css";
import Search from '../Components/Search';
import SearchIcon from "@material-ui/icons/Search";
function SearchPage() {
    const [{term}, dispatch] = useStateValue();
    // LIVE API CALL
    const { data } = useGoogleSearch(term);
    
    //MOCK API CALL
    // const data = Res;
    
    console.log(data);
    return (
        <div className="searchPage">
            <div className="searchPage_header">
                <Link to="/">
                <div className="body_image">
                <h1>Noonya</h1>
                </div>
                </Link>
                <div className="searchPage_headerBody">
                    <Search hideButtons/>
                </div>
            
            <div className="searchPage_options">
            <div className="searchPage_optionsRight">
            
                <div className="searchPage_optionsLeft">
                
                {/* <div className="searchPage_option">
                    <SearchIcon/>
                    <Link to="/all">All</Link>
                </div> */}
            </div>
            </div>
            </div>
        </div>

        {true && (
        <div className="searchPage_results">
           <p className="searchPage_resultCount">
               About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term}
               </p>        
               {data?.items.map(item => (
                   <div className="searchPage_result">
                       <a 
                        className="searchPage_resultLink"
                       href={item.link}>
                        {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                          
                          <img className="searchPage_resultImage"
                          src={item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src}
                          alt=""
                          />
                        )}

                       {item.displayLink} -
                       </a>
                       <a className="searchPage_resultTitle" href={item.link}>
                        <h2>{item.title}</h2>
                       </a>
                       <p className="searchPage_resultSnippet">
                           {item.snippet}
                       </p>
                   </div>
               ))}         
        </div>
         )}
        </div>
    )
}

export default SearchPage;
