import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  logout: {
    color: '#f4f1bb',
    // backgroundColor: '#007ea7'
    backgroundColor: '#0077FF'
  },

  topDiv: {
    // alignContent: 'center',
    // alignItems: 'center',
    // alignContent: 'center',
    textAlign: 'center',
    // justifyContent: 'center'
  },

  tabs: {
    alignContent: 'center',
    // width: '80%',
    textAlign: 'center',
    boxShadow: '1px 1px 5px gray inset',
    // marginBotton: '-10x',
    padding: '0px',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    // boxShadow: '0 10px 60px -10px rgba(13, 28, 39, .5)',
    backdropFilter: 'blur(10spx)',
  },

  pagination: {
    borderRadius: 4,
    padding: '10px',
    margin: '10px',
    width: '230px',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    boxShadow: '0 10px 50px -10px rgba(13, 28, 39, .5)',
    backdropFilter: 'blur(10spx)', borderRadius: '10px'
  },

  span: {
    fontFamily: 'Unica One',
  }
}));
