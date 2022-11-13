import React,{ useState } from 'react'
import { Avatar,Button,Paper,Grid,Typography,Container, Icon } from '@material-ui/core';
import LockOutlinedIcon from "@material-ui/icons/LockOpenOutlined";
import { GoogleLogin } from "react-google-login";

import { useDispatch } from "react-redux";
/* import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Google from './Google'; */


//import Icon from "./icon"
import Input from './Input';
import useStyles from "./styles"

const Auth = () => {
  const classes  = useStyles();
  const [isSignup,setIsSignup] = useState(false)
  
  const dispatch = useDispatch();
  const [showPassword,setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  const handleSubmit = () => {

  }

  const handleChange = () => {

  }

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
    handleShowPassword(false);
  }

  const googleSuccess = async (res) =>{
    const result = res?.profileObj;
    const token = res?.tokenId;
    
    try {
      dispatch({ type: "AUTH" , data: { result,token } });
    } catch (error) {
      console.log(error)
    }
  }

  const googleError = () => alert('Google Sign In was unsuccessful. Try again later');

  return (
    <Container component="main" maxWidth="xs">
      <script src="https://accounts.google.com/gsi/client" async defer></script>

      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography  variant="h5">{isSignup ? "Sign Up" : "Sign In"}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            {
              isSignup && (
                  <>
                    <Grid item >
                    <Input name='firstNmae' label="First Name" handleChange={handleChange} autoFocus half />
                    </Grid>
                    <Grid item>
                    <Input name='lasstNmae' label="Last Name" handleChange={handleChange}  half />
                    </Grid>
                  </>
              )}
                <Input    name="email" label="Email Address" fullwidth="true" handleChange={handleChange} type="email" />
                <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" /> }
          </Grid>
          <Button type="submit" fullwidth variant='contained' color="primary" className={classes.submit}>
            {isSignup ? "Sign Up" : "Sign In"}
          </Button>
          <GoogleLogin 
              prompt='consent'
              clientId='283138669990-3pqt4kijmvofdldgdfdpavo448vf4j2a.apps.googleusercontent.com'
              render={(renderProps) => (
                <Button    style = {{width: 365}} className={classes.googleButton} color="primary" fullWidth={true} onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained"> Google Sign In</Button>
              )} 
              onSuccess={googleSuccess}
              onFailure={googleError}
              cookiePolicy={"single_host_origin"}
          />
           {/* <Google /> */}           
          <Grid container justifyContent='flex-end'>
                <Grid item>
                    <Button onClick={switchMode}>
                      {
                        isSignup ? "Already have an Account? Sign In" : "Don't have an Account? Sign Up"
                      }
                    </Button>
                </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  )
}

export default Auth


{/* <GoogleLogin 
              prompt = 'consent'
              clientId='283138669990-5k99m2k4bv8j2hngk3j05ratviautpii.apps.googleusercontent.com'
              render={(renderProps) => (
                <Button    style = {{width: 365}} className={classes.googleButton} color="primary" fullwidth="true" onClick={renderProps.onClick} disabled={renderProps.disabled} startricon={<Icon />} variant="contained"> Google SignIn</Button>
              )} 
              onSuccess={googleSuccess}
              onFailure={googleFailure}
              cookiePolicy="single_host_origin"
          /> */}


          {/* <GoogleLogin
              onSuccess={credentialResponse => {
                console.log(credentialResponse);
              }}
              onError={() => {
                console.log('Login Failed');
              }}
            />; */}