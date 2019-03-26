import React, { Component } from 'react';
import { Paper, TextField, Grid, Button, Typography } from '@material-ui/core';
import Axios from 'axios';

class RegForm extends Component {
    

    styles={
        paper:{
            paddingTop:40,
            paddingBottom:40,
            borderRadius: 10,
            marginTop:110
        },
        outterGrid:{
            paddingTop: 40,
            // backgroundImage: `url("${Bg}")`
        }
    }

    sgnclick=async(e)=>{
        e.preventDefault();
        var fname=document.getElementById('outlined-fname').value
        var lname=document.getElementById('outlined-lname').value
        var mail=document.getElementById('outlined-email').value
        var pass=document.getElementById('outlined-pass').value
        var cpass=document.getElementById('outlined-cpass').value
        console.log(fname)
        console.log(lname)
        console.log(mail)
        console.log(cpass)
        console.log(pass)
       if(cpass==pass)
       {
            Axios.post('http://127.0.0.1:8000/users/',{
                key:2,
                name:fname,
                surname:lname,
                mailid:mail,
                pass:pass,
                bookmarks:'null'
            })
            .then(res=>{
                console.log('DONE...XXXXXXXXXXXXXXX')
                console.log(res)
                const current =JSON.parse(res.config.data)
                console.log(current)
                localStorage.setItem('user',current.name)
                localStorage.setItem('mail',current.mailid)
                localStorage.setItem('bookmarks',current.bookmarks)
                window.location.href='/'
            })

       }
       else{
           alert('Passwords do not match')
       }

    }

   

    // mailchange=(e)=>{
    //     if(e.target.value.includes('@')&&e.target.value.includes('.'))
    //     {
    //         this.setState({
    //             name:true
    //         })
    //     }
    //     else
    //     {
    //         this.setState({
    //             name:false
    //         })
    //     }
    // }



    render() { 
        return ( 
            <React.Fragment >
                <Grid container direction="row" justify="center" style={this.styles.outterGrid} >

                <Grid item xs={6} style={{marginBottom:"40px"}}>
                <Paper style={this.styles.paper} >
                    <form action="">
                    <Grid container direction="row" justify="center">
                    <Typography variant="overline" style={{fontSize: 30, color: "#607d8b"}} >
                    Register
                    </Typography>
                    
                    <Grid item xs={12}>
                    
                    </Grid>
                    <Grid item xs={4}>
                    <TextField
                    fullWidth
                    autoFocus
                    required
                    id="outlined-fname"
                    label="First Name"

                    // value={this.state.name}
                    // onChange={this.namechange}
                    margin="normal"
                    variant="outlined"
                    />
                    </Grid>

                    <Grid item xs={1}>

                    </Grid>

                    <Grid item xs={4}>
                    <TextField
                    fullWidth
                    required
                    id="outlined-lname"
                    label="Last Name"           
                    // onChange={this.surnamechange}
                    margin="normal"
                    variant="outlined"
                    />
                    </Grid>
                    
                    <Grid item xs={12}>

                    </Grid>
                    
                    
                    <Grid item xs={6}>
                    <TextField
                    fullWidth
                    required
                    id="outlined-email"
                    label="Email"           
                    // onChange={this.mailchange}
                    margin="normal"
                    variant="outlined"
                    />
                    </Grid>
                    
                    <Grid item xs={12}>

                    </Grid>
                    
                    
                    <Grid item xs={6}>
                    <TextField
                    fullWidth
                    required
                    id="outlined-pass"
                    label="Password" 
                    type="password"
                    // onChange={this.passwordchange}
                    margin="normal"
                    variant="outlined"
                    />
                    </Grid>
                    
                    <Grid item xs={12}>

                    </Grid>
                    
                    
                    <Grid item xs={6}>
                    <TextField
                    fullWidth
                    required
                    id="outlined-cpass"
                    type="password"
                    label="Confirm Password"
                    // onChange={this.repasswordchange}
                    margin="normal"
                    variant="outlined"
                    />
                    </Grid>
                    
                    <Grid item xs={12}>

                    </Grid>
                    
                    
                 
                    <Grid container justify="center">
                        <Grid item xs={12}>
                            <Typography id="wrongsub" variant="subtitle2" style={{fontSize:15}}></Typography>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Button onClick={this.sgnclick} variant="contained" color="primary" style={{marginTop: 20}} >
                            Register
                        </Button>
                    </Grid>
                    </Grid>
                    </form>
                </Paper>
                </Grid>
                </Grid>
            </React.Fragment>
         );
        }
    }
//  
export default RegForm;