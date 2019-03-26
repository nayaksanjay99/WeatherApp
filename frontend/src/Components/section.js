import React from 'react'
import {Link} from 'react-router-dom'
import Cloud from './cloud.png'
import log from './icon.png'

export default class Section extends React.Component{
    render(){
        return(
            <div id="section">
                <img src={Cloud} alt="imagery"/>
                <div id="links">
                    <Link id="homes" to="/" ><p id="home">Home</p></Link>
                    <Link id="saved" to="/:clk" ><p id="currentsaved">Bookmarks</p></Link>
                    <Link to="/credits/1" ><p id="currenthome">Credits</p></Link>
                </div>
                <div id="logogy">
                    <p id="logop" style={{fontFamily: "'Satisfy', cursive"}}>Powered by</p>
                    <img width="100" height="100" src={log} alt="logo"/>
                    <p id="logox" style={{fontFamily: "'Gloria Hallelujah', cursive"}}>NS TechSolutions</p>
                </div>
            </div>

        )
    }
}