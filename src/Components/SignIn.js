// SignIn.js
import React, { useState } from 'react';
import {
  Container,
  CssBaseline,
  TextField,
  Button,
  Typography,
  Box,
  Grid,
  Link,
  Dialog,
  // DialogTitle,
  DialogContent,
} from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ForgotPassword from './ForgotPassword'; // Assuming you have a separate ForgotPassword component

const SignIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [openDialog, setOpenDialog] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://groflex-assignment.vercel.app/api/login',formData);
      const { username } = formData;
      navigate(`/registration/${username}`);
    } catch (error) {
      console.error('Login error:', error.response.data);
    }
  };

  const handleForgotPasswordClick = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <TextField
            fullWidth
            label="Email"
            name="username"
            type="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
          <TextField
            fullWidth
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleInputChange}
            required
            sx={{ mt: 2 }}
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2" onClick={handleForgotPasswordClick}>
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2" to="/signup" onClick={()=>navigate('/signup')}>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="xs">
        {/* <DialogTitle>Forgot Password</DialogTitle> */}
        <DialogContent>
          <ForgotPassword onClose={handleCloseDialog} />
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default SignIn;
