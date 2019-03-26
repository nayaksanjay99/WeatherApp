import React from 'react'
import {Button} from '@material-ui/core'

export default class Navbar extends React.Component{


    logger=()=>{
        localStorage.removeItem('user')
        localStorage.removeItem('mail')
        localStorage.removeItem('bookmarks')
        window.location.reload()
    }

    render(){
                            let d=new Date();
                            var month=d.getMonth();
                            let day=d.getDay();
                            let hours=d.getHours();
                            let min=d.getMinutes();
                            let sec=d.getSeconds();
                            let date=d.getDate();
                            switch(month){
                                case 0 :month='January';break;
                                case 1 :month='February';break;
                                case 2 :month='March';break;
                                case 3 :month='April';break;
                                case 4 :month='May';break;
                                case 5 :month='June';break;
                                case 6 :month='July';break;
                                case 7 :month='August';break;
                                case 8 :month='September';break;
                                case 9 :month='October';break;
                                case 10:month='November';break;
                                case 11:month='December';break;
                                default:break;
                            }
                            switch(day){
                                case 0:day='Sunday';break;
                                case 1:day='Monday';break;
                                case 2:day='Tuesday';break;
                                case 3:day='Wednesday';break;
                                case 4:day='Thursday';break;
                                case 5:day='Friday';break;
                                case 6:day='Saturday';break;
                            }
                            
                            if(hours<10)
                            {
                                    hours = "0"+hours;
                            }
                            if(min<10)
                            {
                                    min = "0"+min;
                            }
                            if(sec<10)
                            {
                                    sec = "0"+sec;
                            }
        var lcs=localStorage.getItem('user')
        console.log(lcs)
                            
        return(
            <div>
                <header id="navheader" >
                    <h1 id="headerone" style={{fontFamily: "'ZCOOL XiaoWei', serif"}}>THE Weather App</h1>
                    <h2 id="headertime">{hours}:{min}</h2>
                    <h2 id="headertwo" style={{marginLeft:8}}> {day}, {date}{date==1?('st'):(date==2?('nd'):(date==3?('rd'):('th')))} {month}</h2>
                    {lcs==null?
                        (<a href='/login'><Button style={{color:"WHITE",marginTop:19.9,float:"right"}}>Login</Button></a>)
                        :
                        (<Button onClick={this.logger} style={{color:"WHITE",marginTop:19.9,float:"right"}}>Logout</Button>)}
                    
                </header>
            </div>
        )
    }
}

/* {day}, {date}{date==1?('st'):(date==2?('nd'):(date==3?('rd'):('th')))} {month} */