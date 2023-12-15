// Profile.js
import React, { useState, useEffect } from 'react';
import { Container, Typography, Paper } from '@mui/material';
import axios from 'axios';
import RegistrationCard from './RegistrationCard';
import { useLocation } from 'react-router-dom';

export default function Profile() {
    const [registrationData, setRegistrationData] = useState([]);
    const location = useLocation();
    const { username } = location.state || {};

    useEffect(() => {
        const fetchRegistrationData = async () => {
            try {
                const response = await axios.get('http://localhost:9873/api/registrations');
                console.log("checking", response.data)
                setRegistrationData(response.data);
            } catch (error) {
                console.error('Error fetching registration data:', error);
            }
        };
        fetchRegistrationData();
    }, []);

    const onDelete = async (registrationId) => {
        try {
            await axios.delete(`http://localhost:8080/api/registrations/${registrationId}`);
            setRegistrationData((prevData) =>
                prevData.filter((registration) => registration._id !== registrationId)
            );
        } catch (error) {
            console.error('Error deleting registration:', error);
        }
    };

    const onEdit = async (registrationId) => {
        const response = await axios.put(`http://localhost:8080/api/registrations/${registrationId}`);
        // Implement your edit logic
    };

    return (
        <Container maxWidth="md">
            <Paper elevation={3} style={{ padding: '20px', marginTop: '50px' }}>
                <Typography variant="h4" gutterBottom>
                    Registration Details
                </Typography>
                <Typography variant="body1">
                    Hi, {username}! Below are your registration details:
                </Typography>

                {registrationData.map((registration) => (
                    <RegistrationCard
                        key={registration._id}
                        registration={registration}
                        onDelete={onDelete}
                        // onEdit={onEdit}
                    />
                ))}

            </Paper>
        </Container>
    );
}
