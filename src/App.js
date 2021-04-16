import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import CssBaseline from '@material-ui/core/CssBaseline'
import makeStyles from '@material-ui/styles/makeStyles'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import {ThemeProvider} from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider';
import { Link as RouterLink } from 'react-router-dom'

import MenuIcon from '@material-ui/icons/Menu'
import PeopleIcon from '@material-ui/icons/People'
import AccountBalance from '@material-ui/icons/AccountBalance'
import DashboardIcon from '@material-ui/icons/Dashboard'
import LockIcon from '@material-ui/icons/Lock'
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';

const useStyles = makeStyles((theme) => ({
  appbar: {

  },
  drawer: {
    width: ({isDrawerOpen}) => isDrawerOpen && theme.spacing(7) + 1,
  },
  drawerItems: {
    width: '240px'
  },
  toggleButton: {
    marginLeft: ({isDrawerOpen}) => isDrawerOpen? '230px' : '0px'
  }
}));

const drawerTheme = createMuiTheme({
  palette: {
    type: "dark"
  }
})

const routes = [
  {
    name: "Dashbor",
    icon: DashboardIcon,
    route: "/"
  },
  {
    name: "Stakeholders",
    icon: AssignmentIndIcon,
    route: "/stakeholders"
  },
  {
    name: "Karyawan",
    icon: PeopleIcon,
    divider: true,
    route: "/employees"
  },
  {
    name: "Departemen",
    icon: AccountBalance,
    route: "/departments"
  },
  {
    name: "Jabatan",
    icon: LockIcon,
    route: "/roles"
  },
  {
    name: "Investor",
    icon: MonetizationOnIcon,
    route: "/investors"
  },
  {
    name: "Tentang Kami",
    icon: EmojiEmotionsIcon,
    divider: true,
    route: "/about"
  },
]

export default function App() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [currentRoute, setCurrentRoute] = useState("Dashbor")

  const classes = useStyles({
    isDrawerOpen: drawerOpen
  });

  return (
    <>
      <CssBaseline>
        <AppBar position="static" color="default" className={classes.root}>
          <Toolbar>
            <IconButton className={classes.toggleButton} edge="start" color="inherit" aria-label="menu"
              onClick={() => setDrawerOpen(!drawerOpen)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">
              {currentRoute}
            </Typography>
          </Toolbar>
        </AppBar>
      </CssBaseline>
      <ThemeProvider theme={drawerTheme}>
      <Drawer
        variant="persistent"
        anchor="left"
        className={classes.drawer}
        open={drawerOpen}
        onClose={()=>setDrawerOpen(false)}
      >
        <h1 style={{textAlign: "center"}}>MSDM</h1>
        <List
          className={classes.drawerItems}
        >
          {
            routes.map(({name, icon: Icon, divider, route}, key) => (
              <>
                {divider && <Divider />}
                <ListItem button key={key} component={RouterLink} onClick={() => {setCurrentRoute(name)}} to={route}>
                  <ListItemText>{name}</ListItemText>
                  <ListItemIcon><Icon /></ListItemIcon>
                </ListItem>
              </>
            ))
          }
          <ListItem>
            
          </ListItem>
        </List>
      </Drawer>
      </ThemeProvider>
    </>
  );
}
