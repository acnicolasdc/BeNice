import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useStyles from './Profile.styles'
import Paper from '@material-ui/core/Paper';

export default ({onClick, name, mail, username,  password }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.container}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar alt="Ted talk" src={`https://api.adorable.io/avatars/268/abott@${name}.png`} 
          style={{height: 100, width: 100}}
        />
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography>
                {`Name: ${name}`}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>
                {`Email: ${mail}`}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>
                {`Username: ${username}`}
              </Typography>
            </Grid>
            {/* <Grid item xs={12}>
              <Typography >
                {`Password: ${password}`}
              </Typography>
            </Grid> */}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => onClick()}
          >
            Edit
          </Button>
        </form>
      </div>
    </Paper>
  );
}