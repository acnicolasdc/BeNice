import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    alignItems: 'center',
    MozBoxShadow: '0px 10px 25px 0px rgba(50, 50, 50, 0.1)',
    WebkitBoxShadow: '0px 10px 25px 0px rgba(50, 50, 50, 0.1)',
    boxShadow: '0px 10px 25px 0px rgba(50, 50, 50, 0.1)',
    position: 'fixed',
    top: 0,
    zIndex: 99,
  },
});

export default useStyles;
