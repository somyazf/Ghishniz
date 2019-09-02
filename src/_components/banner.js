import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import bg from '../assets/bg.jpg'
export default function Banner() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl" fixed>
        <Typography component="div" style={{ backgroundImage: `url('${bg}')`, height: '100vh' }} />
      </Container>
    </React.Fragment>
  );
}
