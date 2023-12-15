import React, { useState } from 'react';
import { Grid, TextField, FormControl, InputLabel, Select, MenuItem, RadioGroup, Radio, FormControlLabel, Checkbox, FormGroup, FormLabel, Button, Typography, Container } from '@mui/material';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';

const RegistrationForm = () => {
    const {username} = useParams();
    // console.log("props from signin in page", username);

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        middleName:'',
        lastName: '',
        gender: '',
        dob: '',
        country: '',
        state: '',
        city: '',
        zip: '',
        interests: [],
        profilePicture: '',
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked, files } = e.target;

        if (type === 'checkbox') {
            setFormData((prevData) => ({
                ...prevData,
                interests: checked
                    ? [...prevData.interests, value]
                    : prevData.interests.filter((interest) => interest !== value),
            }));
        } else if (type === 'file') {
            setFormData((prevData) => ({
                ...prevData,
                profilePicture: files[0],  // Assuming only one file is selected
            }));
        } else {
            setFormData((prevData) => ({ ...prevData, [name]: value }));
        }
    
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            const response = await axios.post(`https://groflex-assignment.vercel.app/api/register/${username}`, formData);
            // console.log('Registration successful:', response.data);
            navigate('/profile', { state: { username } })
        }
        catch (error){
        console.error('Registration error:', error);
        }
    };

    return (
        <Container>
            <Typography variant="h4" align="center" gutterBottom >
                Registration Form
                <Button variant="outlined" color="secondary" component={Link} to="/records">
                    View Records
                </Button>
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField label="First Name" name="firstName" value={formData.firstName} onChange={handleInputChange} fullWidth required />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField label="Middle Name" name="middleName" value={formData.middleName} onChange={handleInputChange} fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField label="Last Name" name="lastName" value={formData.lastName} onChange={handleInputChange} fullWidth required />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Gender</FormLabel>
                            <RadioGroup name="gender" value={formData.gender} onChange={handleInputChange} row>
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="other" control={<Radio />} label="Other" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField type="date" label="DOB" name="dob" value={formData.dob} onChange={handleInputChange} fullWidth required />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                            <InputLabel>Country</InputLabel>
                            <Select name="country" value={formData.country} onChange={handleInputChange} required>
                                <MenuItem value="country1">India </MenuItem>
                                <MenuItem value="country2">America </MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                            <InputLabel>State</InputLabel>
                            <Select name="state" value={formData.state} onChange={handleInputChange} required>
                                <MenuItem value="state1">Delhi</MenuItem>
                                <MenuItem value="state2">Gurgaon</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField label="City" name="city" value={formData.city} onChange={handleInputChange} fullWidth required />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField label="Zip" name="zip" value={formData.zip} onChange={handleInputChange} fullWidth required />
                    </Grid>
                    <Grid item xs={12}>
                        <FormGroup>
                            <FormLabel component="legend">Area of Interest</FormLabel>
                            <FormControlLabel control={<Checkbox />} label="Reading" name="interests" value="Reading" onChange={handleInputChange} />
                            <FormControlLabel control={<Checkbox />} label="Writing" name="interests" value="Writing" onChange={handleInputChange} />
                            <FormControlLabel control={<Checkbox />} label="Traveling" name="interests" value="Traveling" onChange={handleInputChange} />
                            <FormControlLabel control={<Checkbox />} label="Playing" name="interests" value="Playing" onChange={handleInputChange} />
                        </FormGroup>
                    </Grid>
                    <Grid item xs={12}>
                        <input type="file" accept="image/*" onChange={(e) => handleInputChange({ target: { name: 'profilePicture', value: e.target.files[0] } })} />
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" color="primary" fullWidth>
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
};

export default RegistrationForm;
