import React from 'react';
import { 
  Drawer, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText,
  useTheme,
  useMediaQuery,
  Box
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import BarChartIcon from '@mui/icons-material/BarChart';
import PersonIcon from '@mui/icons-material/Person';

const drawerWidth = 240;

const Sidebar = ({ open, onClose }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Detect mobile view

  const menuItems = [
    { text: 'Dashboard', path: '/', icon: <DashboardIcon /> },
    { text: 'Workouts', path: '/workout-planner', icon: <FitnessCenterIcon /> },
    { text: 'Exercise Library', path: '/exercise-library', icon: <MenuBookIcon /> },
    { text: 'Progress', path: '/progress', icon: <BarChartIcon /> },
    { text: 'Profile', path: '/profile', icon: <PersonIcon /> }
  ];

  return (
    <Drawer
      variant={isMobile ? 'temporary' : 'persistent'}  // `temporary` for mobile, `persistent` for desktop
      anchor="left"
      open={open}
      onClose={onClose}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          marginTop: '64px',  // To adjust for AppBar height
          height: 'calc(100% - 64px)',
        },
      }}
    >
      <List>
        {menuItems.map((item) => (
          <ListItem 
            button
            key={item.text} 
            onClick={() => {
              navigate(item.path);
              if (isMobile) onClose(); // Close the sidebar if on mobile
            }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
