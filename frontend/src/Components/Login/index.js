import React, { Component } from 'react'
import {TextField} from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },
    dense: {
      marginTop: 19,
    },
    menu: {
      width: 200,
    },
  });



class Login extends Component{

    state={
        name:''
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
      };

    render(){
        const { classes } = this.props;
        return(
            <div style={{margin:0,padding:0,textAlign:"center",backgroundImage:"url('./hd-wallpaper-macro-splash-67843.jpg')"}}>
                <div style={{background:'#eccdebbf',position:'relative',top:200,left:550,width:500}}>
                <h3 style={{margin:0}}>LOGIN</h3>
                    <form style={{display:'flex',flexWrap:'wrap'}}>
                        <TextField
                        id="standard-name"
                        label="Name"
                        className={classes.textField}
                        value={this.state.name}
                        onChange={this.handleChange('name')}
                        margin="normal"
                        />
                    </form>
                </div>
            </div>

        )
    }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired,
  }
  
  export default withStyles(styles)(Login);