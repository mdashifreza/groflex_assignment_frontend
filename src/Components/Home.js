import React from 'react';
import {Link} from "react-router-dom";
import { Button, Container, Typography } from '@mui/material';

export default function Home() {
  return (
    <div>
        <Container sx={{ marginTop: 4 }}>
        <Typography variant="h4">Welcome to Register detail</Typography>
        <Button component={Link} to="/signup" variant="contained" color="primary" sx={{ marginRight: 2 }}>
          Sign Up
        </Button>
        <Button component={Link} to="/signin" variant="contained" color="primary">
          Sign In
        </Button>
      </Container>
    </div>
  )
}
