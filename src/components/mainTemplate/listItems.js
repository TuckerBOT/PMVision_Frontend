import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { Link } from 'react-router-dom';


export const mainListItems = (
  
    <React.Fragment>
    {/* <ListItemButton component={Link} to='/'>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton> */}
    <ListItemButton component={Link} to='/'>
      <ListItemIcon>
        <FileUploadIcon />
      </ListItemIcon>
      <ListItemText primary="Upload" />
    </ListItemButton>
  </React.Fragment>
);
