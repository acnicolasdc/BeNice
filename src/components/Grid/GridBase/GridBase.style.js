import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      height: '100hv',
      width: '100%'
    },
    grid: {
      padding: '20px',
      justifyContent: 'center',
      border: 1,
      borderColor: 'red'
    }
  }));