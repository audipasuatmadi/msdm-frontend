import makeStyles from '@material-ui/styles/makeStyles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

export const useStyles = makeStyles((theme) => ({
  appbar: {},
  drawer: {
    width: ({ isDrawerOpen }) => isDrawerOpen && theme.spacing(7) + 1,
  },
  drawerItems: {
    width: '240px',
  },
  toggleButton: {
    marginLeft: ({ isDrawerOpen }) => (isDrawerOpen ? '230px' : '0px'),
  },
  root:{
    backgroundColor : "#fff",
  }
}));

export const drawerTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});
