import React, { Component } from 'react';
import {Grid, MuiThemeProvider, TextField, Button, Typography, Divider,Tab,Tabs} from '@material-ui/core';

import {Link, NavLink} from 'react-router-dom';
// import * as myTheme from '../../../themes/blueTheme';

import red from '@material-ui/core/colors/red';

const secondary = red[0];

class LgForm extends Component {
    state = { data:null }
    lgclick=async(e)=>{
        console.log("inside lgclick")
        e.preventDefault();
        var mailid=document.getElementById('outlined-name').value
        var password=document.getElementById('outlined-name2').value
        const res=await fetch('http://127.0.0.1:8000/users/',{     ///dont change to axios
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             },
             method:"GET",
            //  body:JSON.stringify({"mailid":mailid,"password":password})
          })
          console.log("waiting for data")
          const data=await res.json()
          console.log(data)
          const current=data.find(c=>{
              return c.mailid==mailid
          })
          console.log(current)
          if(current!=undefined)
            if(password==current.password)
            {
                window.location.href='/'
                localStorage.setItem('user',current.name)
                localStorage.setItem('mail',current.mailid)
                localStorage.setItem('bookmarks',current.bookmarks)
            }
            else
                alert('Invalid Password')
          else
            alert('User not found')
        //   console.log("data received")
        //   if(data!=false){
        //   this.setState({data:data})
        //   console.log("-------")
        //   console.log(this.state.data)
        // //   this.props.loginProp.history.push('/Home')
        // //   console.log(this.props.loginProp.history.location.pathname)
        // // this.props.loginProp.history.location.pathname
        // // this.props.myFetch(this.state.data)
        //   if(this.state.data!==null&&this.state.data!==false){
        //     alert('correct credentials')             //haha
        //   }
        // }
        //   else{
        //       alert("Invalid username or password")
        //     // this.props.loginProp.history.push('/Error')
        //   }
    }
    

    
    render() { 
        console.log(this.props)
        // var variable=(this.state.data!=null&&this.state.data!==false)?(<Link to={Home}/>):(null)
        return ( 
            // <MuiThemeProvider theme={myTheme}>
            <form style={{display:"block"}}
            >
            <Grid
            container
            direction="row"
            justify="center">
            
            <Typography variant="overline" style={{fontSize: 30, color: "#607d8b", marginTop: 20}} >
                    Login
                    </Typography>
                    
                    <Grid item xs={12}>
                    
                    </Grid>

                <Grid item xs={6} style={{marginTop: 10}} >
                    <TextField
                    id="outlined-name"
                    label="E-mail ID"
                    autoFocus
                  // className={classes.textField}
                    // value={this.state.name}
                    // onChange={this.handleChange('name')}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    />
                </Grid>

                <Grid item xs={12}>
                </Grid>
                
                <Grid item xs={6}>
                    <TextField
                    id="outlined-name2"
                    type="password"
                    label="Password"
                    // className={classes.textField}
                    // value={this.state.name}
                    // onChange={this.handleChange('name')}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    />
                </Grid>

                <Grid item xs={12}>
                </Grid>
                
                <Grid item >
                <Link to="/Home" style={{textDecoration:"none"}} >   
                    <Button
                    style={{marginRight: 10,marginBottom: 20,marginTop: 30}}
                    color="primary"
                    variant="contained"
                    onClick={this.lgclick}
                    type="submit"
                    >
                        Login
                    </Button>
                </Link>
                <NavLink 
                to="/signup"
                style={{textDecoration: "none"}}
                >
                    <Button
                    style={{marginBottom: 20,marginTop: 30}}
                    color="primary"
                    variant="outlined"
                    // onClick={this.sgnclick}
                    >
                        Sign Up
                    </Button>
                </NavLink>
                </Grid>
              
                <Grid item xs={12} textAlign="center"><Typography  color="error" variant="body1" style={{textAlign:"center",marginBottom:"3%",visibility:"hidden"}}>Sorry, we don't recognize this combination</Typography>
                    
                </Grid>
                
                <Grid item xs={9}>
                    <Divider variant="middle" />
                </Grid>

                <Grid item xs={12}>
                    <Typography variant="h6" color="primary" style={{textAlign: "center",marginTop: 20}} >
                        Sign up with
                    </Typography>
                </Grid>

            </Grid>
            </form>
            // {variable}
            // </MuiThemeProvider>
         );
    }
}
 
export default LgForm;

