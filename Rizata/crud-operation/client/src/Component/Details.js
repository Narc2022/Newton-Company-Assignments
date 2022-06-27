import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import EmailIcon from '@mui/icons-material/Email';
import WorkIcon from '@mui/icons-material/Work';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import SendToMobileIcon from '@mui/icons-material/SendToMobile';
import LocationOnIcon from '@mui/icons-material/LocationOn';


const Details = () => {
    return (
        <div className='container mt-3'>
            <h1 style={{ fontWeight: 400 }}>Welcome Sachin Singh</h1>
            <Card sx={{ maxWidth: 600 }}>

                <CardContent>
                    <div className='add_btn'>
                        <button className='btn btn-primary'><EditIcon /></button>
                        <button className='btn btn-danger mx-2'><DeleteIcon /></button>
                    </div>
                    <div className='row'>
                        <div className='left_view col-lg-6 col-md-6 col-12'>
                            <img src='/profile.png' style={{ width: 50 }} alt="profile" />
                            <h3 className='mt-3'>Name: <span style={{ fontWeigth: 400 }}>Sachin Singh</span></h3>
                            <h3 className='mt-3'>Age: <span style={{ fontWeigth: 400 }}>21</span></h3>
                            <p><EmailIcon />Email: <span>sachin243@gmail.com</span></p>
                            <p><WorkIcon />Occuption: <span>Web Developer</span></p>
                        </div>
                        <div className='right_view col-lg-6 col-md-6 col-12'>

                            <p className='mt-5'><SendToMobileIcon />Mobile: <span>+917378373173</span></p>
                            <p><LocationOnIcon />Location: <span>Warje Pune</span></p>
                            <p>Description: <span>I am sachin singh. This is a dummy description</span></p>
                        </div>
                    </div>
                </CardContent>
            </Card>

        </div>
    )
}

export default Details