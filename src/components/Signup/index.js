
import Avatar from '@material-ui/core/Avatar'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Checkbox from '@material-ui/core/Checkbox'
import CssBaseline from '@material-ui/core/CssBaseline'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import React from 'react'



const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://i.ibb.co/NtZQSp7/lohp-en-1302x955.png)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:  'transparent',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(12, 5),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: 'none !important',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
}));

function App() {

  const classes = useStyles();

    return (

    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={6} md={6} className={classes.image} />
      <Grid item xs={12} sm={6} md={5} component={Paper} elevation={6} square>
      <form className={classes.form} noValidate>
 <div className={classes.paper}>

          <div dir="auto" class="css-901oao r-jwli3a r-o1rotj r-1ocx9oo r-b88u0q r-nm9kes r-1sdjc60 r-1d332fb r-bcqeeo r-qvutc0"><span class="css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0">Happening now</span></div>
    <div dir="auto" class="css-901oao r-jwli3a r-o1rotj r-1ra0lkn r-b88u0q r-ad9z0x r-1yflyrw r-bcqeeo r-qvutc0"><span class="css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0">Join Twitter today.</span></div>
           
             <div class="css-1dbjc4n r-1777fci r-ywje51 r-1ye8kvj r-1qmwkkh r-1oqcu8e r-13qz1uu">
  <div class="css-1dbjc4n r-1pcd2l5 r-13qz1uu">
  <svg viewBox="0 0 24 24" class="r-k200y r-jwli3a r-4qtqp9 r-yyyyoo r-5sfk15 r-dnmrzs r-1mi0q7o r-bnwqim r-1plcrui r-lrvibr">
      <g>
        <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
      </g>
    </svg>





            

        </div>
         <div class="css-1dbjc4n r-18u37iz"><a href="./i/flow/signup" role="button" data-focusable="true" class="css-4rbku5 css-18t94o4 css-1dbjc4n r-urgr8i r-42olwf r-sdzlij r-1phboty r-rs99b7 r-1loqt21 r-13awgt0 r-1w2pmg r-117bsoe r-1mf7evn r-17w48nw r-1jayybb r-17bavie r-1ny4l3l r-15bsvpr r-o7ynqc r-6416eg r-lrvibr" data-testid="signupButton">
        <div dir="auto" class="css-901oao r-1awozwy r-jwli3a r-6koalj r-18u37iz r-16y2uox r-1qd0xha r-a023e6 r-b88u0q r-1777fci r-ad9z0x r-dnmrzs r-bcqeeo r-q4m81j r-qvutc0"><span class="css-901oao css-16my406 css-bfa6kz r-poiln3 r-bcqeeo r-qvutc0"><span class="SignupButton">Sign up</span></span></div>
      </a><a href="/login" role="button" data-focusable="true" class="css-4rbku5 css-18t94o4 css-1dbjc4n r-1niwhzg r-p1n3y5 r-sdzlij r-1phboty r-rs99b7 r-1loqt21 r-13awgt0 r-1w2pmg r-117bsoe r-17w48nw r-1jayybb r-17bavie r-1ny4l3l r-15bsvpr r-o7ynqc r-6416eg r-lrvibr" data-testid="loginButton">
        <div dir="auto" class="css-901oao r-1awozwy r-13gxpu9 r-6koalj r-18u37iz r-16y2uox r-1qd0xha r-a023e6 r-b88u0q r-1777fci r-ad9z0x r-dnmrzs r-bcqeeo r-q4m81j r-qvutc0"><span class="css-901oao css-16my406 css-bfa6kz r-poiln3 r-bcqeeo r-qvutc0"><span class="LoginButton">Log in</span></span></div>
      </a></div>
</div>
</div>
</form>

      </Grid>
    </Grid>
    )
};

export default App;
