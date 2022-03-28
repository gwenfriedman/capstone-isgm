import React from 'react'
import { Link } from "react-router-dom"

function Home(){
    return(
        <div style={{backgroundColor: "black"}}>
            <h1> Home </h1>

            <ul>
                <li>
                   <Link to="/flashlight"> Flashlight </Link> 
                </li>
                <li>
                   <Link to="/audio"> Audio </Link> 
                </li>
                <li>
                    <Link to="/dutchroom1"> Dutch Room </Link>
                </li>
                <li>
                    <Link to="/map"> Map </Link>
                </li>
            </ul>
        </div>
    )
}

export default Home;