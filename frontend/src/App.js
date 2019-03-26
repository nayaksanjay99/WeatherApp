import React, { Component } from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom' 
import Home from './Components/home'
import Saved from './Components/saved'
import Credits from './Components/credits'
import Navbar from './Components/navbar'
import Section from './Components/section'
import Login from './Components/Login/LoginPage'
import Signup from './Components/Signup'
import Axios from 'axios';

class App extends Component {
  state={
    array:[],
    str:[]
  }
  deletor=(idd)=>{
    var single=this.state.array.filter(elm=>{
      return idd.toString()==elm.city.id.toString()
    })
    console.log(this.state.array)
    console.log(single[0])
    console.log(idd)
    var ind=this.state.array.indexOf(single[0]);
    console.log(ind)
    var array=this.state.array
    var str=this.state.str
    array.splice(ind,1)
    str.splice(ind,1)
    this.setState({
      array,str
    })
  }
  setting=(arry,str)=>{
    var array=[...this.state.array,arry]
    str=[...this.state.str,str]
    if(this.state.array.length==0)
    this.setState({
      array,
      str
    })
    else {
      var elixir=this.state.array.find(elm=>{
        return elm.city.id==arry.city.id
      })
      if(elixir==null)
      {
        this.setState({
          array,str
        })
      }
    }
    console.log(this.state)
  }

 componentWillMount=()=>{
  // const json= localStorage.getItem("astitva")
  // const astitva=JSON.parse(json)
  const json2= localStorage.getItem("bookmarks")
  const astitva2=JSON.parse(json2)
  if(astitva2!=null&&astitva2!='null')
  this.setState({
    array:astitva2.array,
    str:astitva2.str
  })
 }
 componentDidUpdate=()=>{
        
  // if(this.state.array.length){
       const mail=localStorage.getItem('mail')
       const astittva=JSON.stringify(this.state)
      //  localStorage.setItem("astitva",astittva)//}
       Axios.post('http://127.0.0.1:8000/users/',{
         key:1,
         mailid:mail,
         bookmarks:astittva
       })
       .then(res=>{
         console.log('---------------')
         console.log(JSON.parse(JSON.parse(res.config.data).bookmarks))
         console.log(typeof(res.config.data))
         localStorage.setItem("bookmarks",JSON.parse(res.config.data).bookmarks)
       })
}
  render() {
    console.log('ssc')
    console.log(this.state.array)
    return (
      <BrowserRouter>
      <div>
        <div className="App">
        <div className="height">
          <div id="circle"></div>
        </div>
          <Navbar/>
          {console.log(window.location.pathname)}
          {(window.location.pathname!=='/login' && window.location.pathname!=='/signup')?(<Section/>):(null)}
          
          <Switch>
            <Route exact path='/' render={(rp)=>(<Home {...rp} setting={this.setting}/>)}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/signup' component={Signup}/>
            <Route exact path='/:clk'  render={(rp)=>(<Saved pr={this.state.array} changer={this.deletor} st={this.state.str}/>)}/>
            <Route exact path='/credits/:x' component={Credits}/>
          </Switch>
        </div>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
