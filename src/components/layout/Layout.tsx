import React from 'react';
import { Box, Container } from '@mui/material';

import AppBar from './AppBar';
import Footer from './Footer';

const Layout: React.FC = ({ children }) => {
  return (
    <Box
      id="app_container"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <AppBar />
      <Container sx={{ flexGrow: 1 }}>{children}</Container>
      <Footer />
    </Box>
  );
};

export default Layout;
