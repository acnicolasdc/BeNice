import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  card: {
    width: 700,
    margin: theme.spacing(2),
  },
  media: {
    height: 400,
  },
  containerTag: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  chip: {
    margin: theme.spacing(1),

    '& > *': {
      color: '#FFFF',
    },
  },
}));
