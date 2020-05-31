import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    container: {
      position: 'fixed',
      left: 20,
      top: 92,
      padding: '0px 25px 40px 25px',
      maxWidth: 250,
    },
    paper: {
      marginTop: theme.spacing(3),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));