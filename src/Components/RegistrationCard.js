import React from 'react';
import { Card, CardContent, Typography, Grid, Button } from '@mui/material';

const RegistrationCard = ({ registration, onDelete, onEdit }) => {
    const handleDelete = () => {
        onDelete(registration._id);
    };

    // const handleEdit = () => {
    //     onEdit(registration._id);
    // };

    return (
        <Card style={{ margin: '20px 0' }}>
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="body2">First Name: {registration.firstName}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="body2">Middle Name: {registration.middleName}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="body2">Last Name: {registration.lastName}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="body2">Gender: {registration.gender}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="body2">Date of Birth: {registration.dob}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="body2">Country: {registration.country}</Typography>
                    </Grid>
                    <Button variant="contained" color="secondary" onClick={handleDelete}>
                Delete
            </Button>
            {/* <Button variant="contained" color="secondary" onClick={handleEdit}>
                Edit
            </Button> */}
                </Grid>
            </CardContent>
        </Card>
    );
};

export default RegistrationCard;
