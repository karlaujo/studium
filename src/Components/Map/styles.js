import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBarSearch: {
    borderRadius: 4,
    marginBottom: '1rem',
    display: 'flex',
    padding: '16px',
    backgroundColor: '#f4f3ee',
  },
  pagination: {
    borderRadius: 4,
    backgroundColor: '#f4f3ee',
    marginTop: '1rem',
    padding: '16px',
  },
  gridContainer: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
    },
  },
  searchButton: {
    paddingTop: '12px',
    color: '#f4f1bb',
    backgroundColor: '#af4d98'
  },
  map: {
    border: '3px solid #007ea7',
    padding: '10px',
    margin: 'auto',
    borderRadius: '10px'
  }
}));
