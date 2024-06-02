import * as React from 'react';
import Box from '@mui/material/Box';
import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';
import "./Layout.css"


function MainHeader() {


  return (
    <AppBar
      position="static"
      sx={{ padding: 0, backgroundColor: "white", boxShadow: "none",color:"green" }}
    >
      <Container className='container'>
        <Toolbar >
          {/* <AdbIcon sx={{ mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              textDecoration: 'none',
            }}
          >
           Logo
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default MainHeader;