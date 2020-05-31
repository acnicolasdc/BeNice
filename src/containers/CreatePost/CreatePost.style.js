import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  card: {
    width: '100%',
    margin: theme.spacing(2),
  },
  cardHeader:{
    display: 'flex',
    msFlexDirection: 'row',
    alignItems: 'center'
  },
  inputHeader:{
    width: '80%'
  },
  media: {
    height: 400,
  },
  mediaOption: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  button: {
    color: '#FFF',
    marginLeft: 15,
  },
  divider: {
    marginRight: 15,
  },
}));
