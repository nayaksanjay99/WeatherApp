import React, { Component } from 'react';
import {Grid, Paper, MuiThemeProvider} from '@material-ui/core';
import LgForm from './components/LgForm';

class LoginPage extends Component {
    state = { data:null }
    render() { 
        return ( 
            <div>
                
                <Grid
                style={{background: "none"}}
                container
                direction="row"
                justify="center">
                    <Grid item xs={10} sm={9} md={7} lg={5} xl={4} style={{marginTop: 125,marginBottom: 100}} >
                        <Paper style={{borderRadius: 10,background:"WHITE",zIndex:"1",float: "left"}} >
                            <LgForm  myFetch={this.props.myFetch} loginProp={this.props} />
                        </Paper>
                    </Grid>
                </Grid>
                {/* <Footer /> */}
                {/*<div style={{background: "linear-gradient(135deg, rgb(96, 108, 136) 0%, rgb(63, 76, 107) 100%)"}}>
                <Particles width="100%" height="100%"/>
        </div>*/}
            </div>
         );
    }
}
 
export default LoginPage;