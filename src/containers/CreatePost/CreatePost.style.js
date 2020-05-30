import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  card: {
    width: 700,
    margin: theme.spacing(2),
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
