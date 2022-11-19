import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBarSearch: {
    borderRadius: 4,
    marginBottom: '1rem',
    display: 'flex',
    padding: '16px',
    backgroundColor: 'black',
    color: 'black'
  },
  pagination: {
    borderRadius: 4,
    backgroundColor: 'black',
    color: 'black',
    marginTop: '1rem',
    padding: '16px',
  },
  gridContainer: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
    },
  },
  map: {
    border: '3px solid #007ea7',
    padding: '10px',
    margin: 'auto',
    borderRadius: '10px'
  }
}));
