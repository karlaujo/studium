import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    fontFamily: "typeface-abel",
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
    backgroundColor: '#f4f3ee',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    boxShadow: '0 10px 60px -10px rgba(13, 28, 39, .5)',
    backdropFilter: 'blur(10spx)',
    borderRadius: '10px'
  },
  heading: {
    color: '#064093',
    textDecoration: 'none',
    fontFamily: 'test',
  },
  image: {
    marginRight: '15px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    color: '#007ea7'
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  signInButton: {
    color: '#f4f1bb',
    backgroundColor: '#007ea7'
  },
  logout: {
    color: '#f4f1bb',
    fontFamily: 'test',
    backgroundColor: '#084698',
    borderRadius : '8px',
    padding: '5px',
    margin: '0px',
    height: '50px',
    width: '100px'

   },
}));
