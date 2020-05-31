import React, {useContext, useState} from 'react';
import { withRouter } from 'react-router'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HomeIcon from '@material-ui/icons/Home';
import useStyles from './MenuBasic.styles';
import { ThemeContext } from '@/providers/theme';
import { SessionContext } from '@/providers/session';

const MenuBasicComponent = (props) => {
  const { root } = useStyles();
  const [value, setValue] = useState('home');

  const { dark, toggleSwitch } = useContext(ThemeContext);
  const { deleteSession } = useContext(SessionContext);

  const handleChange = (event, newValue) => {
    console.log(props)
    if(newValue === 'publication') props.history.push('/CreatePublication')
    if(newValue === 'home') props.history.push('/')    
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange} className={root}>
      <BottomNavigationAction
        label="Home"
        value="home"
        icon={<HomeIcon />}
      />
      <BottomNavigationAction
        label="Publication"
        value="publication"
        icon={<GroupAddIcon />}
      />
      <BottomNavigationAction
        label={dark ? "Light" : "Dark"}
        value="theme"
        onClick={toggleSwitch}
        icon={<Brightness4Icon />}
      />
      <BottomNavigationAction
        label="Exit"
        value="exit"        
        onClick={() => {
          deleteSession()          
        }}
        icon={<ExitToAppIcon />}
      />
    </BottomNavigation>
  );
}

export default withRouter(MenuBasicComponent);