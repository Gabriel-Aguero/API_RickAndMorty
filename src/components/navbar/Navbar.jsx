/* eslint-disable react/jsx-no-undef */
import { Typography, AppBar, Toolbar } from '@mui/material/';
import ApiIcon from '@mui/icons-material/Api';

const Navbar = () => {
  return (
        <AppBar sx={{ height: "50px"}}>
            <Toolbar>
                <Typography>
                    <ApiIcon/>
                </Typography>
                <Typography sx={{margin: "auto", fontSize: "20px"}}>
                    Mi nombre es Gabriel Agüero
                </Typography>
            </Toolbar>
        </AppBar>
  )
}

export default Navbar;

