import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { CustomDialog } from '../CustomDialog';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { dialogOpenSubject$ } from '../CustomDialog/CustomDialog';
import { FavoriteTable } from './FavoriteTable';


export interface NavBarInterface {}
const NavBar: React.FC<NavBarInterface> = () => {
  
const handleClick = () => {
  dialogOpenSubject$.setSubject = true;
};
	return (
    <>
    <CustomDialog>
      <FavoriteTable>
      </FavoriteTable>
    </CustomDialog>
		<AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            JDCG Toolbar
          </Typography>
          <IconButton color="secondary" aria-label="favorites" component="label" onClick={handleClick}>
            <FavoriteIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      </>
	  );
};

export default NavBar;

