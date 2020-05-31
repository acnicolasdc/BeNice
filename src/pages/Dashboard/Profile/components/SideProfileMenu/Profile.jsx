import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useStyles from './Profile.styles'
import logo from '@/assets/images/logo.png';
import Paper from '@material-ui/core/Paper';

export default ({onClick, name, mail, username,  password, updateUserData }) => {
  const classes = useStyles();

  const [dataUser, setData] = useState({ name, mail, username,  password });

  const handleOnChange = (e) => {
    setData({ ...dataUser, [e.target.name]: e.target.value });
  };

  const handleOnClick = () => {
    updateUserData({...dataUser});
    onClick()
  }

  return (
    <Paper className={classes.container}>
      <CssBaseline />
      <div className={classes.paper}>
      <Avatar alt="Ted talk" src={`https://api.adorable.io/avatars/268/abott@${name}.png`} 
      style={{height: 80, width: 80}}
      />
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="name"
                name="name"              
                required
                fullWidth
                id="name"
                label="Name"
                autoFocus
                value={dataUser.name}
                onChange={handleOnChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField              
                required
                fullWidth
                id="mail"
                label="Email"
                name="mail"
                autoComplete="email"
                value={dataUser.mail}
                onChange={handleOnChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField              
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                value={dataUser.username}
                onChange={handleOnChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField              
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={dataUser.password}
                onChange={handleOnChange}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => handleOnClick()}
          >
            Update
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="danger"
            className={classes.submit}
            onClick={() => onClick()}
          >
            Cancel
          </Button>
        </form>
      </div>
    </Paper>
  );
}