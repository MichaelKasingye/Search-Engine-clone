import React from 'react';
import Search from "../Components/Search";
import '../style/Home.css';
import {Link} from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from '@material-ui/core';

function Home() {
    return (
        <div className="home">
            <div className="home_header">
                <div className="home_headerLeft">
                    <Link to = "/about">About</Link>
                    <Link to = "/store">Store</Link>
                </div>
                <div className="home_headerRight">
                <Link to = "/mail">Mail</Link>
                <Link to = "/images">Images</Link>
               <AppsIcon/>     
                <Avatar/>
                </div>
            </div>
            <div className="home_body">
                <div className="body_image">
                <h1>Noonya</h1>
                </div>
                <div className="home_inputContainer">
                <Search/>
                </div>
            </div>
        </div>
    )
}

export default Home;
