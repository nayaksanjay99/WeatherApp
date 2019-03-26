import React from 'react'
import {Link} from 'react-router-dom'
import x from './minus-sign-inside-a-black-circle.png'

export default class Home extends React.Component{

    state={
        array:null,
        str:null
    }

    getter=(ms)=>{
        const y=ms.substring(0,4)
        const m=ms.substring(5,7)
        const d=ms.substring(8,10)
        const dt=new Date(y,m-1 ,d)
        const dtt=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
      return (<h3>{dtt[dt.getDay()]}</h3>)
  }
    

    /*setter=(data)=>{
        if(data!=null){
        const array=[...this.state.array,data]
        this.setState({
            array:array
        })
    }
    }*/


    componentDidMount=()=>{

        
       


        console.log("pr"+this.props.pr)
        if(this.props.pr!=null){
        const array=this.props.pr
        const str=this.props.st
        console.log("next")
        if(array!=null)
        this.setState({
            array,str
        })
        console.log("after mounting"+this.props.pr)
        console.log(this.state.array)

        
    }}
    
   
   
    render(){
/*  if(this.state.array!=null){
            console.log("inside")
        const d=new Date()
        const date=d.getDate();
        const hour=d.getHours();
        var f=this.state.array.list.find(c=>{
           return ( (c.dt_txt.substring(11,13)-hour<1) &&  (c.dt_txt.substring(11,13)-hour>-2) &&(c.dt_txt.substring(8,10)==date) );
        })        
        }*/


        console.log(this.state.str)
        console.log(this.state.array)
        const af=this.state.array!=null?(


            this.state.array.map(elm=>{

                const d=new Date()
                const date=d.getDate();
                const hour=d.getHours();
                var f=elm.list.find(c=>{
                   return ( (c.dt_txt.substring(11,13)-hour<=1) &&  (c.dt_txt.substring(11,13)-hour>-2) &&(c.dt_txt.substring(8,10)==date) );
                })  
                
                
                const upsc=(f!=undefined)?(<div className="savescrollbox" key={elm.list.indexOf(f)}>
                            <img id="minus" src={x} alt="delete" onClick={()=>{this.props.changer(elm.city.id)}}/>
                                <Link id="nilaa" to={{
                                                    pathname:'/',
                                                    state:{city:elm.city.name,country:elm.city.country,cOun:this.state.str[this.state.array.indexOf(elm)]}
                                                    }}>
                                    <div >
                                        <h3>{elm.city.name}</h3>
                                        {console.log(this.state.str)}
                                        <h3 id="h3">{f.dt_txt.substring(11,16)}</h3>  
                                        <img width="81" height="81" src={'http://openweathermap.org/img/w/'+(((f.dt_txt.substring(11,13)==="15")||(f.dt_txt.substring(11,13)==="18"))?(f.weather[0].icon.substring(0,2)+"d"):(f.dt_txt.substring(11,13)==="03"?(f.weather[0].icon.substring(0,2)+"n"):(f.weather[0].icon)))+'.png'} alt="img"/>
                                        <h2>{(f.main.temp-273).toString().substring(0,5)}°C</h2>
                                    </div>
                                </Link>
                            </div>):(<div></div>)
                


                return(
                    <div id="boxer2" key={this.state.array.indexOf(elm)}>
                        <div>{upsc}</div>
                    </div>
                )
            })
        ):(
            <h3>No Bookmarks found</h3>
        )

        return(
            <div className="height3">
                <div id="inheight3">{af}</div>
                
            </div>
        )
    }
}