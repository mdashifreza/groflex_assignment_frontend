// ForgotPassword.js
import React, { useState } from 'react';
import { Typography, TextField, Button } from '@mui/material';
import axios from 'axios';

const ForgotPassword = ({ onClose }) => {
    const [resetData, setResetData] = useState({
        username : '',
        resetPass : '',
    })
    const handleResetChange = (e) => {
        const { name, value } = e.target;
        setResetData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
        const response = await axios.post("http://localhost:9873/api/reset-password", resetData);
        // console.log("rewsponse data", response.data)
        onClose();
        }
        catch (error) {
            console.error('Login error:', error.response.data);
        }
    };

    return (
        <div>
            <Typography component="h1" variant="h5">
                Reset New Password
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Enter username"
                    name="username"
                    autoComplete="username"
                    autoFocus
                    value={resetData.username}
                    onChange={handleResetChange}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="resetPass"
                    label="Enter New Passsword"
                    name="resetPass"
                    autoComplete="resetPass"
                    autoFocus
                    value={resetData.resetPass}
                    onChange={handleResetChange}
                />
                <Button type="submit" variant="contained" sx={{ mt: 3 }}>
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default ForgotPassword;
