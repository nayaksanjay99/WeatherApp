import React from 'react'
import Input from './input'
import axios from 'axios'
import down from './down_arrow.png'
import up from './up_arrow.png'
 
export default class Home extends React.Component{
    state={
        array:null,
        str:null
    }
    setter=(city,country,str)=>{
        console.log(city+" "+country)
        axios.get('http://api.openweathermap.org/data/2.5/forecast?q='+city+','+country+'&APPID=7150e5c228fa88d468d0be54047b2d56')
        .then(res=>{
            console.log(res)
            this.setState({
                array:res.data,
                str
            })
        })
    }

    heck=()=>{
        this.props.setting(this.state.array,this.state.str)
    }
    

    componentDidMount=async()=>{
        const json= localStorage.getItem("weather")
        const weather=JSON.parse(json)
    if(weather!=null)
        this.setState({
          array:weather.array,
          str:weather.str
        })
       
     }
    
      componentDidUpdate=()=>{
        const weather=JSON.stringify(this.state)
        localStorage.setItem("weather",weather)
      }

      getter=(ms)=>{
          const y=ms.substring(0,4)
          const m=ms.substring(5,7)
          const d=ms.substring(8,10)
          const dt=new Date(y,m-1 ,d)
          const dtt=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
        return (<h3 style={{fontFamily: "'Bree Serif', serif"}}>{dtt[dt.getDay()]}</h3>)
    }


    
    render(){
        if(this.props.location.state!=null)
        {
            console.log("andar")
            this.setter(this.props.location.state.city,this.props.location.state.country,this.props.location.state.cOun)
            this.props.location.state=null
        }

        console.log(this.props)

    console.log("haha"+this.state.array)

       


    //const lt=state.list[1].main;
    const ll=this.state.array!=null?(
            
        <div id="lldiv" style={{textAlign:"center"}}>
            <h2 style={{fontFamily:"'Abril Fatface', cursive"}}>{this.state.array.city.name},{this.state.str}</h2>
            <div id="lefty">
                <p className="bef">Ground level</p>
                <p className="bef">Humidity</p>
                <p className="bef">Pressure</p>
                <p className="bef">Sea level</p>
                <p className="bef">Approx. population</p>
            </div>
            <div id="middy">
                <p className="mid">:</p>
                <p className="mid">:</p>
                <p className="mid">:</p>
                <p className="mid">:</p>
                <p className="mid">:</p>                
            </div>
            <div id="righty">
                <p className="aft">{this.state.array.list[1].main.grnd_level}</p>
                <p className="aft">{this.state.array.list[1].main.humidity}</p>
                <p className="aft">{this.state.array.list[1].main.pressure}</p>
                <p className="aft">{this.state.array.list[1].main.sea_level}</p>
                <p className="aft">{this.state.array.city.population==1000000?(">1000000"):(this.state.array.city.population)}</p>
            </div>
            <button onClick={this.heck} style={{marginLeft:"0"}}>Add to Bookmarks</button>
        </div>
    ):(
        <div id="lldiv">
            <h2>_ , _</h2>
            <div id="lefty">
                <p className="bef">Ground level</p>
                <p className="bef">Humidity</p>
                <p className="bef">Pressure</p>
                <p className="bef">Sea level</p>
                <p className="bef">Approx. population</p>
            </div>
            <div id="middy">
                <p className="mid">:</p>
                <p className="mid">:</p>
                <p className="mid">:</p>
                <p className="mid">:</p>
                <p className="mid">:</p>                
            </div>
            <div id="righty"></div>
                <p className="aft">_</p>
                <p className="aft">_</p>
                <p className="aft">_</p>
                <p className="aft">_</p>
                <p className="aft">_</p>
            </div>

    )
    if(this.state.array!=null){
        console.log("inside")
    const d=new Date()
    const date=d.getDate();
    const hour=d.getHours();
    console.log(this.state.array.list)
    var f=this.state.array.list.find(c=>{
        {console.log(c.dt_txt.substring(11,13))}
       return ((parseInt(c.dt_txt.substring(11,13),10)-hour<=1) &&  (parseInt(c.dt_txt.substring(11,13),10)-hour>-2) &&(parseInt(c.dt_txt.substring(8,10),10)==date) );
    })        
}
    console.log(f)
    console.log(f!=undefined)
        const upper=(f!=null)?(
            
            <div className="temp">
            {console.log('fun '+this.state.array)}
                <p id="temppara" style={{fontFamily:"'Abril Fatface', cursive"}}>{this.state.array.city.name} , {this.state.str}</p>
                <img width="100" height="100" src={'http://openweathermap.org/img/w/'+(((f.dt_txt.substring(11,13)==="15")||(f.dt_txt.substring(11,13)==="18"))?(f.weather[0].icon.substring(0,2)+"d"):(f.dt_txt.substring(11,13)==="03"?(f.weather[0].icon.substring(0,2)+"n"):(f.weather[0].icon)))+'.png'} alt="img"/>
                <h3 id="temphead">{(f.main.temp-273).toString().substring(0,5)}°C</h3>  
                <p id="tempdesc">{f.weather[0].description}</p>
                <p id="temppara2">Wind: {f.wind.speed} kmph</p>
                <div id="minmax">
                <div id="divmintemp">
                    <img src={down} alt="down"/>
                    <p id="mintemp">{(f.main.temp_min-273).toString().substring(0,5)}°C</p>
                </div>
                <div id="divmaxtemp">
                    <img src={up} alt="up"/>
                    <p id="maxtemp">{(f.main.temp_max-273).toString().substring(0,5)}°C</p>
                </div>
                </div>
            </div>
        ):(
           <div className="temp">
           <p id="temppara" >_</p>
            <h3 id="temphead">_ _</h3>
            <p id="tempdesc">_</p>
            <p id="temppara2">_</p>
            <div id="minmax">
                <div id="divmintemp">
                    <img src={down} alt="up"/>
                    <p id="mintemp">_</p>
                </div>
                <div id="divmaxtemp">
                    <img src={up} alt="down"/>
                    <p id="maxtemp">_</p>
                </div>
                </div>
           </div> 
        )
        

        


        
           
            const rd=this.state.array!=null?(
            
                this.state.array.list.map(elm=>{
                    return(
                        <div className="scrollbox" key={this.state.array.list.indexOf(elm)}>
                            {this.getter(elm.dt_txt)}
                            <h3 id="h3">{elm.dt_txt.substring(11,16)}</h3>  
                            <img width="81" height="81" src={'http://openweathermap.org/img/w/'+(((elm.dt_txt.substring(11,13)==="15")||(elm.dt_txt.substring(11,13)==="18"))?(elm.weather[0].icon.substring(0,2)+"d"):(elm.dt_txt.substring(11,13)==="03"?(elm.weather[0].icon.substring(0,2)+"n"):(elm.weather[0].icon)))+'.png'} alt="img"/>
                            <h2>{(elm.main.temp-273).toString().substring(0,5)}°C</h2>
                        </div>
                    )
                })

            ):(
                <div>

                </div>
            )




        return(
            
                
                <div id="box">
                
                    <div id="upperbox">
                        {upper}
                        <Input string={this.setter}/>
                    </div>
                    <div id="lower">
                        <div id="lowerbox">
                            <div id="leftlower">
                                {ll}
                            </div>
                            <div id="rdx">
                                <div id="rightlower">
                                    {rd}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
        )
    }
}
/*onClick={this.props.saver(this.state.array,this.state.str)} */